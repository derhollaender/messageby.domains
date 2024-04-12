import { kv } from '@vercel/kv';
import { VercelRequest, VercelResponse } from '@vercel/node';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import { Message, gifs } from './_shared';

function isJson(req: VercelRequest) {
  const acceptHeader = req.headers.accept;
  return acceptHeader && acceptHeader.includes('application/json');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {

  let word: string = '';
  let link: string = '';
  let giphy: string = '';
  let position: string = 'top';

  try {
    const hash = req.query.m as string;
    if (hash === undefined) {
      throw new Error('No hash provided');
    }

    let p = req.query.p as string;
    if (p !== undefined) {
      position = p;
    }
    const message = await kv.get(hash) as Message;
    if (message === null) {
      throw new Error('No message found for the given hash');
    }
    word = message.words[message.currentWord];
    message.currentWord += 1;
    if (message.addressBarPositon === null) {
      message.addressBarPositon = position as 'top' | 'bottom';
    } else {
      position = message.addressBarPositon;
    }

    if (message.gif === '') {
      message.gif = gifs.getRandom(message.addressBarPositon);
    }

    await kv.set(hash, message);

    const host = req.headers.host ?? '';
    const protocol = process.env.VERCEL_ENV === 'development' ? 'http' : 'https';
    const isProd = process.env.VERCEL_ENV === 'production';

    if (message.currentWord >= message.words.length) {
      if (message.selfDestruct) {
        await kv.del(hash);
      } else {
        message.currentWord = 0;
        await kv.set(hash, message);
      }

      link = isProd
        ? `${protocol}://send-a.${host.substring(host.indexOf('.') + 1)}/done?m=${hash}`
        : `${protocol}://${host}/done?m=${hash}`;

    } else {

      link = isProd
        ? `${protocol}://${word}.${host.substring(host.indexOf('.') + 1)}/next?m=${hash}`
        : `${protocol}://${host}/next?m=${hash}&word=${word}`;

    }

    console.log(link);
    giphy = message.gif;

    // console.log(message);

  } catch (e: any) {
    let status: number = 400;
    // console.log(e.message)
    if (e.message === 'No message found for the given hash' || e.message === 'No hash provided') {
      status = 404;
    }

    if (isJson(req)) {
      res.status(400).json({});
      return;
    } else {
      // Read the HTML file
      const filePath = path.join(__dirname, '..', '/html/not-found.html');
      const html = fs.readFileSync(filePath, 'utf8');

      //Extract the GET parameter from the request query
      const myParam = req.query.h;

      // Load the HTML into cheerio
      const $ = cheerio.load(html);

      // Manipulate  the HTML
      // This is just an example, replace with your own manipulation
      //$('meta[name="redirection"]').attr('content', `0; ${link}`);
      // Set the content type to HTML and send the response
      res.setHeader('Content-Type', 'text/html');
      res.status(404).send($.html());
      return;
    }
  }

  if (isJson(req)) {
    res.status(200).json({ link: link });
    return;
  }

  // Read the HTML file
  const filePath = path.join(__dirname, '..', '/html/next.html');
  const html = fs.readFileSync(filePath, 'utf8');

  //Extract the GET parameter from the request query
  const myParam = req.query.h;

  // Load the HTML into cheerio
  const $ = cheerio.load(html);

  // Manipulate  the HTML
  $('body').attr('class', "next " + position);
  $('#giphy').attr('src', giphy);
  // This is just an example, replace with your own manipulation
  $('meta[name="redirection"]').attr('content', `1; ${link}`);
  // Set the content type to HTML and send the response
  res.setHeader('Content-Type', 'text/html');
  res.send($.html());

}
