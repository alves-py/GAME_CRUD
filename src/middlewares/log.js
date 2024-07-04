const logger = (req, res, next) => {
  console.log(`${req.method} ${req.body.toString()}`);
  next();
};

module.exports = logger;
