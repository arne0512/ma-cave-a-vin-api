const db = require("../db");

const findMany = () => {
  return db.promise().query("SELECT * FROM Wines");
};

const create = ({
  estate_name,
  vintage,
  appellation,
  type,
  grape,
  organic,
  price,
  buying_year,
  quantity,
  tasting_note,
  comments,
}) => {
  return db
    .promise()
    .query(
      "INSERT INTO Wines (estate_name, vintage, appellation, type, grape, organic, price, buying_year, quantity, tasting_note, comments, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        estate_name,
        vintage,
        appellation,
        type,
        grape,
        organic,
        price,
        buying_year,
        quantity,
        tasting_note,
        comments,
        new Date(),
      ]
    );
};

module.exports = {
  findMany,
  create
};
