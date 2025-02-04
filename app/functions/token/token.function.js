// ----------------------------------------------
// $app/functions/token
// token.function.js
// ----------------------------------------------
// Token generator.
// We use JWT for authorization. To create the token, we use this function.

import { appConfig } from "$app/config/index.js";

import jwt from "jsonwebtoken";

const createToken = (payload) => {
  // ----------------------------------------------
  // createToken()
  // ----------------------------------------------
  // Inputs are just the user id. The data is the id.
  // Find secret in appConfig.
  // Then set expiresIn for 7 days.

  return jwt.sign(payload, appConfig.secret, { expiresIn: "30d" });
};

export default createToken;
