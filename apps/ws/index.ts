import { prismaClient } from "db/client";

Bun.serve({
    port: 8081,
    fetch(req, server) {
      // upgrade the request to a WebSocket
      if (server.upgrade(req)) {
        return; // do not return a Response
      }
      return new Response("Upgrade failed", { status: 500 });
    },
    websocket: {
        open(ws) {
            console.log("WebSocket opened");
        },
        close(ws) {
            console.log("WebSocket closed");
        },
        message: async (ws, message) => {
            try {
                await prismaClient.user.create({
                    data: {
                        username: message.toString(),
                        password: Math.random().toString()
                    }
                })
                ws.send("User created: " + message);
            } catch (error) {
                console.error("Error creating user:", error);
                ws.send("Error creating user");
            }
        },
    },
});