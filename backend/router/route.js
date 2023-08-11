import { Router } from "express";
import * as controller from "../controller/controller.js";

const router = Router();

// // // POST

// GET
router.route('/solutions').get(controller.getSolution) 

// // // PUT

export default router