const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "An error in the server ocurred" });
  };
  
  module.exports = errorHandler;