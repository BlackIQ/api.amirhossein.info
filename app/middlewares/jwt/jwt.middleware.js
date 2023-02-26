// ----------------------------------------------
// jwt.middleware.js
// ----------------------------------------------
// JWT Middleware.
// Check the autorization ( Bearer token ).

import { QueryTypes } from "sequelize";
import JWT from "jsonwebtoken";

import { MySQL } from "$connections/index.js";
import { appConfig } from "$config/index.js";
import { exist } from "$functions/index.js";

const jwt = async (req, res, next) => {
  // ----------------------------------------------
  // jwt()
  // ----------------------------------------------
  // First chec that the request contains autorization or not.
  // Then, chec that user is exist or not.
  // If all got ok, the request autotization is valid.

  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { id } = JWT.verify(token, appConfig.secret);

    const findUserQury = `SELECT id FROM USER WHERE id = '${id}'`;

    const userData = await MySQL.query(findUserQury, {
      raw: true,
      type: QueryTypes.SELECT,
    });

    if (!exist(userData)) {
      return res.status(401).send({ message: "Unautorized" });
    }

    next();
  } catch (error) {
    return res.status(401).send({ message: "Unautorized" });
  }
};

export default jwt;
