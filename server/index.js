import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import router from './routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
app.use(cors());
dotenv.config();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD
Connection(username, password);
const PORT = 8000
app.listen(PORT, () => console.log('server is running on 8000'));