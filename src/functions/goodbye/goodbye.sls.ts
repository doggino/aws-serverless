import { handlerPath } from "@libs/utils";
import schema from "./goodbye.schema";

export const goodbye = {
  handler: `${handlerPath(__dirname)}/goodbye.handler.main`,
  events: [
    {
      http: {
        method: "post",
        path: "goodbye",
        request: {
          schemas: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};
