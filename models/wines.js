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
        parseInt(vintage) ? parseInt(vintage) : null,
        appellation,
        type,
        grape,
        organic,
        parseInt(price) ? parseInt(price) : null,
        parseInt(buying_year) ? parseInt(buying_year) : null,
        parseInt(quantity) ? parseInt(quantity) : null,
        parseInt(tasting_note) ? parseInt(tasting_note) : null,
        comments,
        new Date(),
      ]
    );
};

const getOneWine = (id) => {
  return db.promise().query("SELECT * FROM Wines WHERE id=?", [id]);
};

const delete_ = (id) => {
  return db.promise().query("DELETE FROM wines WHERE id=?", [id]);
};

const update = (id, newAttributes) => {
    return db
      .promise()
      .query("UPDATE Wines SET ? WHERE id= ?", [newAttributes, id]);
  };

module.exports = {
  findMany,
  create,
  getOneWine,
  delete_,
  update,
};
