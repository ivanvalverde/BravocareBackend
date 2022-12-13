import postgres from "postgres";
import dotenv from 'dotenv';

dotenv.config();

const sql = postgres(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/${process.env.DB_NAME}`, {
  host                 : 'localhost',
  port                 : 5432,
  database             : process.env.DB_NAME,
  username             : process.env.DB_USER,
  password             : process.env.DB_PASSWORD,
})

export default sql;