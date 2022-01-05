const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");
const routesLog = require("./routes");
const swagger = require("./config/swagger");
const PORT = 5000;

// register swagger apu
fastify.register(require("fastify-swagger"), swagger.options);

// connect to DB
mongoose
  .connect("mongodb://localhost/loggerDebug")
  .then(() => console.log("MongoDB connected…"))
  .catch((err) => console.log(err));

// import routes
routesLog.forEach((route, index) => {
  fastify.route(route);
});

// fastify.get("/", (req, reply) => {
//   reply.type("application/json").code(200);
//   return { a: 1, b: 2 };
// });

const startServer = async () => {
  try {
    await fastify.listen(PORT);
    fastify.swagger();
    fastify.log.info(`Server redy: ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error("madonnina", err);
    process.exit(1);
  }
};

startServer();
