import express from 'express';
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Server');
});
app.listen(port, () => {
    console.log(`Server up and running at http://localhost:${port}`);
});
