import { handlerPath } from "@libs/utils";

export const getHomepageData = {
  handler: `${handlerPath(
    __dirname
  )}/getHomepageData.handler.function_getHomepageData`,
  events: [
    {
      httpApi: {
        path: "/getHomepageData",
        method: "get",
      },
    },
  ],
};
