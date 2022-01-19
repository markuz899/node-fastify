const boom = require("boom");
const Logger = require("../../models/Logger");

// Get all log
exports.getLogs = async (req, reply) => {
  try {
    const logs = await Logger.find({}, { __v: 0 });
    return logs;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single log by ID
exports.getSingleLog = async (req, reply) => {
  try {
    const id = req.params.id;
    const log = await Logger.findById(id, { __v: 0 });
    if (!log) return reply.status(404).send(new Error("Log not found"));
    return log;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new log
exports.addLog = async (req, reply) => {
  if (!req.body) return reply.status(404).send(new Error("Body not found"));
  try {
    const log = new Logger({ ...req.body });
    return log.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing log
exports.updateLog = async (req, reply) => {
  try {
    const id = req.params.id;
    const log = req.body;
    const { ...updateData } = log;
    const update = await Logger.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a log
exports.deleteLog = async (req, reply) => {
  try {
    const id = req.params.id;
    const log = await Logger.findByIdAndRemove(id);
    return log;
  } catch (err) {
    throw boom.boomify(err);
  }
};
