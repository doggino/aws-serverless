import { APIGatewayProxyHandler } from "aws-lambda";

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

export const function_getHomepageData: APIGatewayProxyHandler = async (
  event
) => {
  console.log(
    "🚀 ~ file: hello.handler.ts:21 ~ constmyFunction:APIGatewayProxyHandler= ~ event:",
    event
  );
  try {
    const response = {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello, world!" }),
    };
    return response;
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};
