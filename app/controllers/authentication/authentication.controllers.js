import { User } from "$models";
import { createToken } from "$functions";

import md5 from "md5";

export const REGISTER = async (req, res) => {
  const data = req.body;

  try {
    const checkUser = await User.findOne({ username: data.username });

    if (!checkUser) {
      data.password = md5(data.password);

      const user = await User.create(data);

      res.status(200).send({ token: createToken(user._id) });
    } else {
      res.status(401).send({ message: "Username is already in use" });
    }
  } catch (error) {
    res.status(500).send({ message: error.name });
  }
};

export const LOGIN = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password: md5(password) });

    if (user) {
      res.status(200).send({ token: createToken(user._id) });
    } else {
      res.status(401).send({ message: "Username not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
