const LoggerOne = (request, response, next) => {
   console.log("logg 1");
   next();
};

module.exports = LoggerOne;