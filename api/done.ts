import { VercelRequest, VercelResponse } from '@vercel/node';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import { gifs } from './_shared';
export default async function handler(req: VercelRequest, res: VercelResponse) {



  // Read the HTML file
  const filePath = path.join(__dirname, '..', '/html/done.html');
  const html = fs.readFileSync(filePath, 'utf8');

  // Load the HTML into cheerio
  const $ = cheerio.load(html);

  // Manipulate the HTML
  // This is just an example, replace with your own manipulation
  $('#giphy').attr('src', gifs.getRandom('done'));
  // Set the content type to HTML and send the response
  res.setHeader('Content-Type', 'text/html');

  res.send($.html());
  return

}
