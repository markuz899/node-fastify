// Import our Controllers
const logController = require("../controllers/loggerController");
const LoggerSchema = require("../models/Logger");

const routes = [
  {
    method: "GET",
    url: "/api/logs",
    handler: logController.getLogs,
  },
  {
    method: "GET",
    url: "/api/logs/:id",
    handler: logController.getSingleLog,
  },
  {
    method: "POST",
    url: "/api/logs",
    handler: logController.addLog,
    schema: LoggerSchema.addCarSchema,
  },
  {
    method: "PUT",
    url: "/api/logs/:id",
    handler: logController.updateLog,
  },
  {
    method: "DELETE",
    url: "/api/logs/:id",
    handler: logController.deleteLog,
  },
];

module.exports = routes;
