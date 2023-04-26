import { handlerPath } from "@libs/utils";
import schema from "./hello.schema";

export const hello = {
  handler: `${handlerPath(__dirname)}/hello.handler.main`,
  events: [
    {
      http: {
        method: "post",
        path: "hello",
        request: {
          schemas: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};
