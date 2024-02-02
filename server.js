import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Serves the page thru backend when the path is typed on address bar
app.use('/', express.static(path.join(__dirname + '/dist')))
app.use('/about', express.static(path.join(__dirname + '/dist')))
app.use('/works', express.static(path.join(__dirname + '/dist')))
app.use('/works/minify', express.static(path.join(__dirname + '/dist')))
app.use('/works/shortly', express.static(path.join(__dirname + '/dist')))
app.use('/contact', express.static(path.join(__dirname + '/dist')))
app.use('*', express.static(path.join(__dirname + '/dist')))

app.listen(PORT, () => console.log(`Listening on ${PORT}`));