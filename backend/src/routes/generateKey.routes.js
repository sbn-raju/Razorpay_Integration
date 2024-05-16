import {Router} from "express"
import { genetratedKeyController } from "../controllers/generatedKey.controller.js";

const keyRoute = Router();

keyRoute.get("/key",genetratedKeyController)

export default keyRoute
