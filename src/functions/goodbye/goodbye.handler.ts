import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/utils";

import schema from "./goodbye.schema";

const goodbye: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  return formatJSONResponse({
    message: `Goodbye ${event.body.name}, welcome to the exciting Serverless world!`,
    event,
  });
};

export const main = middyfy(goodbye);
