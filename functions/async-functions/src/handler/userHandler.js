const { getUser, getPhone, getAddress } = require('../core/asyncFunctions');

/**
 * Dependecies that need to be created before calling the handlers
 */
const deps = {
  getUser,
  getPhone,
  getAddress,
};

module.exports.handler = require('../core/index')(deps);

module.exports.deps = deps;
