const { findMany } = require("../models/wines");

const getWines = async (req, res) => {
  const [wines] = await findMany(req.query);
  res.status(200).json(wines);
};

const createWine = async (req, res) => {
    try {
      await create(req.body);
      res.status(201).send("Wine has been created");
    } catch (err) {
        console.log(err);
      res.status(500).send("Error creating wine");
    }
  };

module.exports = {
  getWines,
  createWine
};
