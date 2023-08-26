// const formController = require('../controllers/formController.js');
import formHandle  from '../controllers/formController.js';

import express from "express";
const router = express.Router();
console.log("hello");
router.route("/").post(formHandle);
router.route("/login").post(formHandle);

export default router;