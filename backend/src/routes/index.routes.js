import {Router} from "express"
import { indexController } from "../controllers/index.controllers.js";

const indexRoute = Router();

indexRoute.get("/",indexController);

export default indexRoute