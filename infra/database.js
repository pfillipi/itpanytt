import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "postgres",
    password: process.env.POSTGRESS_PASSWORD,
  });
  await client.connect();
  await client.query(queryObject);
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

export default {
  query: query,
};
