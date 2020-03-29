module.exports = function (data, conf) {
  return require('./text')(data, conf, 50000);
};
