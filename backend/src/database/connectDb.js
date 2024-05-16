//Importing Packages
import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

//Configuring the Dotenv Data
dotenv.config();


//Creating Object of Pool
const pool = new Pool({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
});


export default pool;
