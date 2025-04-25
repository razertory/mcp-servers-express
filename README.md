# MCP SERVERS EXPRESS

This template project demonstrates how to host multiple Model Context Protocol (MCP) endpoints using an Express.js backend.


## Installation

Install dependencies using pnpm:

```sh
pnpm install
```



To run the server in development mode with hot-reloading:

```sh
pnpm run dev
```

## Production
First, build the TypeScript code:

Then, start the server:

The server will be running on http://127.0.0.1:3000.

The following MCP servers are available:

- greet: Provides a greet tool that takes a name and returns a greeting.
    - Endpoint: http://127.0.0.1:3000/greet/sse
- time: Provides a get-time tool that returns the current time.
    - Endpoint: http://127.0.0.1:3000/time/sse
These endpoints use Server-Sent Events (SSE) for communication.