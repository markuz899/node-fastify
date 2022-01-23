const getSingleLogValidation = {
  params: {
    id: { type: "string" },
  },
  response: {
    200: {
      type: "object",
      properties: {
        _id: { type: "string" },
        msg: { type: "string" },
        created_at: { type: "string" },
      },
    },
  },
};

const addLogValidation = {
  body: {
    type: "object",
    required: ["msg"],
    properties: {
      msg: { type: "string" },
    },
  },
  response: {
    200: {
      type: "object",
      properties: {
        _id: { type: "string" },
        msg: { type: "string" },
        created_at: { type: "string" },
      },
    },
  },
};

const editLogValidation = {
  params: {
    id: { type: "string" },
  },
  body: {
    type: "object",
    required: ["msg"],
    properties: {
      msg: { type: "string" },
    },
  },
  response: {
    200: {
      type: "object",
      properties: {
        _id: { type: "string" },
        msg: { type: "string" },
        created_at: { type: "string" },
      },
    },
  },
};

const deleteLogValidation = {
  params: {
    id: { type: "string" },
  },
  response: {
    200: {
      type: "object",
      properties: {
        _id: { type: "string" },
        msg: { type: "string" },
        created_at: { type: "string" },
      },
    },
  },
};

module.exports = {
  getSingleLogValidation,
  addLogValidation,
  editLogValidation,
  deleteLogValidation,
};
