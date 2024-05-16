//Importing all the NPM packages
import express, { urlencoded } from "express"
import dotenv from "dotenv"
import cors from "cors"


//Configuring the .env File to get access to the environment Variables
dotenv.config();



//Creating the express instance
const app = express();


// Using middlewares 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());




//Importing from the Environment variables4
const port = process.env.PORT || 3000

//Init the app
app.listen(port,()=>{
    console.log(`App is listening at the port ${port}`);
});


//Importing routes from the routes folder
import indexRoute from "./routes/index.routes.js";
import paymentRoute from "./routes/payment.routes.js"
import keyRoute from "./routes/generateKey.routes.js";



//Using the APIs 
app.use("/",indexRoute);
app.use("/api/v1",paymentRoute);
app.use("/api/v1",keyRoute);

