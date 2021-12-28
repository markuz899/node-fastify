const fastify = require("fastify")({ logger: true });
const PORT = 5000;

//BBea serverr
fastify.get("/", (req, reply) => {
  reply.type("application/json").code(200);
  return { a: 1, b: 2 };
});

const startServer = async () => {
  try {
    await fastify.listen(PORT);
    console.log(`Server redy port: ${PORT}`);
  } catch (err) {
    fastify.log.error("madonnina", err);
    process.exit(1);
  }
};

startServer();
