import { kv } from '@vercel/kv';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {

  // Increment the counter
  let count = await kv.get('count') as number || 0;

  // Send the shareable link as the response
  res.status(200).json({ count: count });
}
