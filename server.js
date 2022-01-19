const fastify = require("fastify")({ logger: false });
const mongoose = require("mongoose");
const routesLog = require("./routes");
const swagger = require("./config/swagger");
const PORT = 5000;

// register swagger cors
fastify.register(require("fastify-swagger"), swagger.options);
fastify.register(require("fastify-cors"), {
  origin: "*",
});

// import routes
routesLog.forEach((route) => {
  fastify.route(route);
});

const startServer = async () => {
  let db = "mongodb://localhost:27017/loggerDebug";
  try {
    await mongoose.connect(db);
    await fastify.listen(PORT);
    fastify.swagger();
    const address = fastify.server.address();
    console.log(`Server: ${address.address}:${address.port}`);
    console.log(`Swagger: ${address.address}:${address.port}/documentation`);
  } catch (err) {
    fastify.log.error("madonnina", err);
    process.exit(1);
  }
};

startServer();
