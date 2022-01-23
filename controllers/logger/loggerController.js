const boom = require("boom");
const Logger = require("../../models/Logger");

// Get all log
const getLogs = async (req, reply) => {
  try {
    const logs = await Logger.find({}, { __v: 0 });
    return logs;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single log by ID
const getSingleLog = async (req, reply) => {
  try {
    const id = req.params.id;
    const log = await Logger.findById(id, { __v: 0 });
    if (!log) return reply.code(404).send(new Error("Log not found"));
    return log;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new log
const addLog = async (req, reply) => {
  if (!req.body) return reply.code(404).send(new Error("Body not found"));
  try {
    let created_at = new Date();
    const log = new Logger({ ...req.body, created_at });
    return log.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing log
const updateLog = async (req, reply) => {
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
const deleteLog = async (req, reply) => {
  try {
    const id = req.params.id;
    const log = await Logger.findByIdAndRemove(id);
    return log;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Format table
const dropLog = async (req, reply) => {
  try {
    const removeAll = await Logger.remove();
    return removeAll;
  } catch (err) {
    throw boom.boomify(err);
  }
};

module.exports = {
  getLogs,
  getSingleLog,
  addLog,
  updateLog,
  deleteLog,
  dropLog,
};
