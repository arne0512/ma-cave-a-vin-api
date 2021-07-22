const winesRouter = require("./wines");

module.exports = (app) => {
  app.use("/wines", winesRouter);
};
