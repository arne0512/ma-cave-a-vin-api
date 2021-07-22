const { findMany, create, getOneWine, delete_, update } = require("../models/wines");

const getWines = async (req, res) => {
  const [wines] = await findMany(req.query);
  res.status(200).json(wines);
};

const createWine = async (req, res) => {
  try {
    await create(req.body);
    res.status(201).send("Wine has been created");
  } catch (err) {
    res.status(500).send("Error creating wine");
  }
};

const getWine = async (req, res) => {
  const [wine] = await getOneWine(req.params.id);
  res.status(200).json(wine);
};

const deleteWine = async (req, res) => {
  try {
    await delete_(req.params.id);
    res.status(204).send();
  } catch (err) {
      console.log(err);
    res.status(500).send("Error deleting wine");
  }
};

const updateWine = async (req, res) => {
    try {
      await update(req.params.id, req.body);
      res.status(200).send("Wine has been updated");
    } catch (err) {
      res.status(500).send("Error updating wine");
    }
  };

module.exports = {
  getWines,
  createWine,
  getWine,
  deleteWine,
  updateWine
};
