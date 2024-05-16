import {Router} from "express"
import { paymentController, paymentVerification } from "../controllers/payment.controller.js";

const paymentRoute = Router();

paymentRoute.post("/payments",paymentController)
paymentRoute.post("/paymentVerification",paymentVerification);

export default paymentRoute
