// ----------------------------------------------
// auth.controller.js
// ----------------------------------------------
// Authentication controllers. Where I love!
// For authentication, we used Redis for caching OTPs and CAPTCHAs.
// Let's have a look.

import { MySQL } from "$connections/index.js";
import { exist, createToken } from "$functions/index.js";

import { QueryTypes } from "sequelize";

export const LOGIN = async (req, res) => {
  // ----------------------------------------------
  // LOGIN()
  // ----------------------------------------------
  // Loging user in with nationalCode, username.
  // Here we get the captcha too.

  const { password, username } = req.body;

  const findUser = `SELECT id FROM USER WHERE password = ? AND username = ?`;

  try {
    const userRecord = await MySQL.query(findUser, {
      replacements: [password, username],
      raw: true,
      type: QueryTypes.SELECT,
    });

    // Check that user exist or not
    if (exist(userRecord)) {
      res.status(200).send({
        message: "Welcome!",
        token: createToken(userRecord[0].id),
      });
    } else {
      res.status(401).send({ message: "User is not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const REGISTER = async (req, res) => {
  // ----------------------------------------------
  // LOGIN()
  // ----------------------------------------------
  // Loging user in with nationalCode, username.
  // Here we get the captcha too.

  const { password, username, fullName } = req.body;

  const createQuery = `INSERT INTO USER (password, username, fullName) VALUES (?, ?, ?)`;

  try {
    const insertUser = await MySQL.query(createQuery, {
      replacements: [password, username, fullName],
      raw: true,
      type: QueryTypes.INSERT,
    });

    console.log(insertUser);

    res.status(200).send({ message: "User created." });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
