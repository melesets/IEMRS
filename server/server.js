import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.resolve(__dirname, '../client/dist');

const app = express();

app.use(express.static(distPath));
app.use('/iemrs', express.static(distPath));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => console.log(`IEMRS server running on port ${PORT}`));
