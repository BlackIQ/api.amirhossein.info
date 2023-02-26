import { MySQL } from "$connections/index.js";
import { exist } from "$functions/index.js";

import { QueryTypes } from "sequelize";

export const CREATE = async (req, res) => {
  const { title, details } = req.body;
  const { author } = req.headers;

  const createQuery =
    "INSERT INTO NOTES (author, title, details) VALUES (?, ?, ?)";

  try {
    await MySQL.query(createQuery, {
      replacements: [author, title, details],
      raw: true,
      type: QueryTypes.INSERT,
    });

    res.status(200).send({ message: "Note created." });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const ALL = async (req, res) => {
  const findQuery = "SELECT * FROM NOTES";

  try {
    const data = await MySQL.query(findQuery, {
      raw: true,
      type: QueryTypes.SELECT,
    });

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  const findQuery = "SELECT * FROM NOTES WHERE id = ?";

  try {
    const data = await MySQL.query(findQuery, {
      replacements: [id],
      raw: true,
      type: QueryTypes.SELECT,
    });

    if (exist(data)) {
      res.status(200).send(data[0]);
    } else {
      res.status(404).send({ message: "Note not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.params;

  const findQuery = "SELECT * FROM NOTES WHERE id = ?";

  try {
    const data = await MySQL.query(findQuery, {
      replacements: [id],
      raw: true,
      type: QueryTypes.SELECT,
    });

    if (exist(data)) {
      const deleteQuery = "DELETE FROM NOTES WHERE id = ?";

      try {
        await MySQL.query(deleteQuery, {
          replacements: [id],
          raw: true,
          type: QueryTypes.DELETE,
        });

        res.status(200).send({ message: "Note deleted" });
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
    } else {
      res.status(404).send({ message: "Note not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
