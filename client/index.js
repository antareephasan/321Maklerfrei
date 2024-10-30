import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const app = express();
app.use(express.static(path.join(dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(dirname, 'build', 'index.html')); // Use dirname here
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port 167.99.52.98:${PORT}`);
});
