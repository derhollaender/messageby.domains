import { kv } from '@vercel/kv';
import { VercelRequest, VercelResponse } from '@vercel/node';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import { Message } from './_shared';

export default async function handler(req: VercelRequest, res: VercelResponse) {

  let name = 'somebody';

  try {
    const hash = req.query.m as string;
    if (hash === undefined) {
      throw new Error('not found');
    }


    const message = await kv.get(hash) as Message;
    if (message === null) {
      throw new Error('not found');
    }
    name = message.name;

    // Read the HTML file
    const filePath = path.join(__dirname, '..', '/html/open-message.html');
    const html = fs.readFileSync(filePath, 'utf8');

    // Load the HTML into cheerio
    const $ = cheerio.load(html);


    if (name !== '') {
      $('h1').text(`${message.name} left a message for you`);
    }

    // Set the content type to HTML and send the response
    res.setHeader('Content-Type', 'text/html');
    res.send($.html());

  } catch (error) {

    // Read the HTML file
    const filePath = path.join(__dirname, '..', '/html/not-found.html');
    const html = fs.readFileSync(filePath, 'utf8');

    // Load the HTML into cheerio
    const $ = cheerio.load(html);

    // Manipulate the HTML
    // This is just an example, replace with your own manipulation

    // Set the content type to HTML and send the response
    res.setHeader('Content-Type', 'text/html');
    res.send($.html());

  }
}
