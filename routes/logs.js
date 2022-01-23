const logController = require("../controllers/logger/loggerController");
const logValidation = require("../controllers/logger/logValidation");
const apiUrl = "/api";

const routes = [
  {
    method: "GET",
    url: `${apiUrl}/logs`,
    handler: logController.getLogs,
  },
  {
    method: "GET",
    url: `${apiUrl}/logs/:id`,
    schema: logValidation.getSingleLogValidation,
    handler: logController.getSingleLog,
  },
  {
    method: "POST",
    url: `${apiUrl}/logs`,
    schema: logValidation.addLogValidation,
    handler: logController.addLog,
  },
  {
    method: "PUT",
    url: `${apiUrl}/logs/:id`,
    schema: logValidation.editLogValidation,
    handler: logController.updateLog,
  },
  {
    method: "DELETE",
    url: `${apiUrl}/logs/:id`,
    schema: logValidation.deleteLogValidation,
    handler: logController.deleteLog,
  },
  {
    method: "DELETE",
    url: `${apiUrl}/drop-logs:sign`,
    preHandler: (req, reply, next) => {
      const { sign } = req.query;
      if (!sign) return reply.code(401).send("Not allowed");
      if (sign !== "confirm") return reply.code(401).send("Not allowed");
      next();
    },
    handler: logController.dropLog,
  },
];

module.exports = routes;
