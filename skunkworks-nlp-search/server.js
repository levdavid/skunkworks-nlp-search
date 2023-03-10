import express from 'express'

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3030;

const app = express()

app.use(express.static('client/build'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: "client/build" });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
