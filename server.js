const fastify = require("fastify")({ logger: false });
const fastifyEnv = require("fastify-env");
const fs = require("fs");
const mongoose = require("mongoose");
const swagger = require("./config/swagger");
const PORT = 5000;

const schema = {
  type: "object",
  required: ["DB_NAME"],
  properties: {
    DB_NAME: {
      type: "string",
    },
  },
};

const options = {
  confKey: "config",
  schema,
  dotenv: true,
  data: process.env,
};

// register swagger cors env
fastify.register(require("fastify-swagger"), swagger.options);
fastify.register(require("fastify-cors"), {
  origin: "*",
});
fastify.register(fastifyEnv, options);
fastify.register(require("fastify-axios"));

// import dinamical routes
fs.readdir("./routes", (err, files) => {
  if (err) return;
  let allRoute = [];
  for (let file of files) {
    let routes = require(`./routes/${file}`);
    allRoute = [...allRoute, ...routes];
  }
  allRoute.forEach((route) => {
    fastify.route(route);
  });
});

// testing routes
// fastify.get("/", async function (req, reply) {
//   try {
//     const { data } = await fastify.axios.get(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     reply.code(200).send(data);
//   } catch (err) {
//     console.log(err);
//   }
// });

const startServer = async () => {
  await fastify.after();
  let db = `mongodb://localhost:27017/${process.env.DB_NAME}`;
  try {
    await mongoose.connect(db);
    await fastify.listen(PORT);
    fastify.swagger();
    const address = fastify.server.address();
    console.log(`Server: ${address.address}:${address.port}`);
    console.log(`Swagger: ${address.address}:${address.port}/documentation`);
  } catch (err) {
    fastify.log.error("ERROR - ", err);
    process.exit(1);
  }
};

startServer();
