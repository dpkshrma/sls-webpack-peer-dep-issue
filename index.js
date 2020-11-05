import serverless from 'serverless-http';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/health', (req, res) => res.json({ status: 'online' }));

export default serverless(app);
