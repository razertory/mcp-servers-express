import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import {z} from "zod";

const greetServer = new McpServer({
    name: "greet-server",
    version: "1.0.0"
});


greetServer.tool(
    "greet",
    {
        name: z.string(),
    },
    async ({name}) => ({
      content: [{
        type: "text",
        text: `Hello, ${name}!`
      }]
    })
)


const timeServer = new McpServer({
    name: "time-server",
    version: "1.0.0"
});

timeServer.tool(
    "get-time",
    {},
    async () => ({
      content: [{
        type: "text",
        text: `The current time is ${new Date().toLocaleTimeString()}`
      }]
    })
)


// Map of server names to their respective server instances
export const serverMap: Record<string, McpServer> = {
    "greet": greetServer,
    "time": timeServer
};