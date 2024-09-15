import fetch from 'node-fetch';

export default async function handler(req, res) {
  const url = `https://www.4vsk.jelgava.lv/images${req.url}`;
  try {
    const response = await fetch(url);
    const data = await response.text();
    res.setHeader('Content-Type', response.headers.get('Content-Type'));
    res.status(response.status).send(data);
  } catch (error) {
    res.status(500).send('Error fetching the requested URL.');
  }
}
