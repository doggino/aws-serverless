import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/utils";

import schema from "./hello.schema";
import { ConnectionPool, config as sqlConfig } from "mssql";

// Configuration for MS SQL Server
const dbConfig: sqlConfig = {
  user: "your_username",
  password: "your_password",
  server: "your_server_name",
  database: "your_database_name",
  options: {
    encrypt: true, // If your SQL Server requires encrypted connection
    trustServerCertificate: true, // If you are using a self-signed certificate
  },
};

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const pool = new ConnectionPool(dbConfig);

  await pool.connect();
  const request = pool.request();
  const result = await request.query("SELECT * FROM your_table_name");
  console.log(result.recordset);
  await pool.close();

  return formatJSONResponse({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    event,
  });
};

export const main = middyfy(hello);
