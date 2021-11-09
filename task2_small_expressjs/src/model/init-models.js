const DataTypes = require("sequelize").DataTypes;
const _activity = require("./activity");

function initModels(sequelize) {
  const activity = _activity(sequelize, DataTypes);


  return {
    activity,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
