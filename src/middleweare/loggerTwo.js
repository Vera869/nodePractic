const LoggerTwo = (request, response, next) => {
   console.log("logg 2");
   next();
};

module.exports = LoggerTwo;