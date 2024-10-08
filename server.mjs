import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.post('/*', async (req, res) => {
    const url = req.originalUrl.slice(1); // Remove leading slash
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
    });

    const responseData = await response.json();
    res.json(responseData);
});

app.listen(PORT, () => {
    console.log(`CORS proxy server is running on http://localhost:${PORT}`);
});
