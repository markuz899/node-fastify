const logController = require("../controllers/logger/loggerController");
const LoggerSchema = require("../models/Logger");

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
    handler: logController.getSingleLog,
  },
  {
    method: "POST",
    url: `${apiUrl}/logs`,
    handler: logController.addLog,
    schema: LoggerSchema.addCarSchema,
  },
  {
    method: "PUT",
    url: `${apiUrl}/logs/:id`,
    handler: logController.updateLog,
  },
  {
    method: "DELETE",
    url: `${apiUrl}/logs/:id`,
    handler: logController.deleteLog,
  },
];

module.exports = routes;
