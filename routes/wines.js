const winesRouter = require("express").Router();
const { getWines, createWine, getWine, deleteWine, updateWine } = require("../controllers/wines");

winesRouter.get("/", getWines);
winesRouter.post("/", createWine);
winesRouter.get("/:id", getWine);
winesRouter.delete("/:id", deleteWine);
winesRouter.patch("/:id", updateWine);



module.exports = winesRouter;
