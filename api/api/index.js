const express = require('express');
const mongoose = require('mongoose');
const routes = require('../src/routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 8080;
const { checkJwt, checkAdmin } = require('../src/utils/jwtUtils');
const { globalLimit } = require('../src/utils/rate-limiters');
const admin = require('firebase-admin');
const serviceAccount = require('./happy-clean-8e79e-firebase-adminsdk-d9ktq-6d4baeab21'); // Ruta al archivo JSON de las credenciales de servicio
const morgan = require('morgan');
require('dotenv').config();

mongoose.set('strictQuery', true);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const mongodbURI = process.env.DB_DEV;

console.log(JSON.stringify(process.env.NODEENV), mongodbURI);

async function main() {
  await mongoose.connect(mongodbURI);
}

const app = express();
app.use(morgan('dev'));
app.get('/api', async (req, res) => {
  res.send({
    message: 'Server working',
  });
});

app.get('/api/check-db', async (req, res) => {
  try {
    res.send({ message: await connect() });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Unable to connect to the database' });
  }
});

app.use(cors({ origin: '*' }));
app.use(globalLimit);
// en /api aplicamos solamente el express.json, porque a stripe no le gusta.
app.use('/api', express.json({ limit: '50mb' }));
app.use('/api', bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes);

const ReportSchema = new mongoose.Schema({
  number: Number,
});

const Report = mongoose.model('Report', ReportSchema);

app.get('/api/report/:number', checkJwt, checkAdmin, async (req, res) => {
  const { number } = req.params;
  const report = new Report({ number: parseInt(number) });
  await report.save();
  res.status(201).send(report);
});

app.use('*', (req, res) => {
  res.status(404).send(req.baseUrl);
});

app.use((err, req, res, next) => {
  const message_to_send = '🐾' + err.message;
  res.status(err.statusCode || 500).send({
    error: true,
    message: message_to_send,
  });
});

app.listen(port, () => {
  console.log(`Server has started on port ${port}!`);
});

async function main() {
  try {
    await mongoose.connect(mongodbURI);
    console.log('Connected to the database.');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1); // Exit the application if unable to connect to the database
  }
}

main().catch((error) => {
  console.error('An error occurred during initialization:', error);
  process.exit(1); // Exit the application if an error occurs during initialization
});

module.exports = app;
