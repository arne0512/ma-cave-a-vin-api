const winesRouter = require("express").Router();
const { getWines, createWine } = require("../controllers/wines");

winesRouter.get("/", getWines);
winesRouter.get("/", createWine);

module.exports = winesRouter;
