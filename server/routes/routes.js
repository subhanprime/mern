import express from "express";
import { adduser, allUser } from '../controllers/user-controllers.js'
const router = express.Router();
router.post('/add', adduser);
router.get('/all', allUser);

export default router;