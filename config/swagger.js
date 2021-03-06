exports.options = {
  routePrefix: "/documentation",
  exposeRoute: true,
  swagger: {
    info: {
      title: "Fastify API",
      description: "Building a fast rest api with Node.js, mongo, swagger",
      version: "1.0.0",
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
    host: "127.0.0.1:5000",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
};
