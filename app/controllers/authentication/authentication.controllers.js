import { createToken } from "$app/functions/index.js";
import { User, Role } from "$app/models/index.js";

import md5 from "md5";

export const LOGIN = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password: md5(password) });

    if (!user) {
      return res.status(401).send({ message: "User not found" });
    }

    return res.status(200).send({
      message: "Welcome",
      token: createToken({ id: user._id }),
      user: user,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const REGISTER = async (req, res) => {
  const data = req.body;

  data.password = md5(data.password);

  try {
    await User.create(data);

    return res.status(200).send({
      message: "Welcome",
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
