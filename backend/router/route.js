import { Router } from "express";
import * as controller from "../controller/controller.js";
// import Auth,{localVariables} from '../middleware/auth.js'
// import { registerMail } from "../controller/mailer.js";

const router = Router();

// // // POST

// GET
router.route('/solutions').get(controller.getSolution) 

// // // PUT

export default router