// ----------------------------------------------
// token.function.js
// ----------------------------------------------
// Token generator.
// We use JWT for authorization. To create the token, we use this function.

import { appConfig } from "$config";
import { User } from "$models";

import jwt from "jsonwebtoken";

const createToken = (id) => {
  // ----------------------------------------------
  // createToken()
  // ----------------------------------------------
  // Inputs are just the user id. The data is the id.
  // Find secret in appConfig.
  // Then set expiresIn for 7 days.

  return jwt.sign({ id }, appConfig.secret, { expiresIn: "7d" });
};

const reverseToken = async (authorization) => {
  const token = authorization.split(" ")[1];

  const { id } = jwt.verify(token, appConfig.secret);

  return id;
};

export { createToken, reverseToken };
