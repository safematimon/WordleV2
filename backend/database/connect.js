import pg from "pg";
import ENV from "../config.js"

const {Client} = pg;

const connect = async () => {

  const client = new Client({
    user: ENV.USER,
    host: ENV.HOST,
    database: ENV.DATABASE,
    password: ENV.PASSWORD,
    port: ENV.PORT,
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    await client.connect();
    console.log("Connected to PostgreSQL database!!");
    return client;
  } catch (err) {
    console.error("Error connecting to PostgreSQL:", err);
    throw err;
  }

}

export default connect