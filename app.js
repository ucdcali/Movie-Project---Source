import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const movie = req.query.title;
  try {
    const response = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=7d00dba4`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
