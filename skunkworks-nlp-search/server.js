import express from 'express'
import { generateUploadURL } from './s3.js'

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express()

app.use(express.static('assets'))

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: "assets" });
});

app.get('/s3Url', async (req, res) => {
  const url = await generateUploadURL()
  res.send({url})
})

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
