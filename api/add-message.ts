import { kv } from "@vercel/kv";
import { VercelRequest, VercelResponse } from '@vercel/node';
import { Message } from './_shared';

// Function to sanitize text and generate a URL-friendly hash
async function createMessage(text: string, selfDestruct: boolean, name: string): Promise<Message> {
  // Sanitize text to remove special characters and emojis
  const sanitizedText = text.replace(/[^\w\s]/gi, '').trim();
  // Split text into an array of words
  const words = sanitizedText.split(/\s+/);
  // Generate a URL-friendly hash of 8 characters
  const hash = generateHash(8);
  // Store the array of words in the KV store
  const message: Message = {
    hash: hash,
    words: words,
    gif: '',
    selfDestruct: selfDestruct,
    addressBarPositon: null,
    currentWord: 0,
    name: name
  }
  await kv.set(hash, message);
  // Return the generated hash
  return message;
}

function generateHash(length: number): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-';
  let hash = '';
  for (let i = 0; i < length; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)];
  }
  return hash;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Extract the message from the request body
  const { message, selfDestruct, name } = req.body;

  // Check if message is provided
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Invalid message provided.' });
  }

  // Increment the counter
  let count = await kv.get('count') as number || 0;
  count = count + 1;
  await kv.set('count', count);

  // Sanitize the message, split into words, and generate a hash
  const theMessage: Message = await createMessage(message, selfDestruct, name);

  // Generate the shareable link
  const host = req.headers.host;
  const protocol = process.env.VERCEL_ENV === 'development' ? 'http' : 'https';
  const shareLink = `${protocol}://${host}/open-message?m=${theMessage.hash}`;

  // Send the shareable link as the response
  res.status(200).json({ link: shareLink });
}
