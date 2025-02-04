import { User, Role, Permission } from "$app/models/index.js";
import md5 from "md5";

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({ _id: id }).populate({
      path: "role",
      model: Role,
      populate: {
        path: "permissions",
        model: Permission,
        select: "label value",
      },
    });

    if (!user) {
      return res.status(404).send({ message: "User did not found" });
    }

    return res.status(200).send({ message: "User found", user });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const ALL = async (req, res) => {
  try {
    const users = await User.find().populate({
      path: "role",
      model: Role,
      populate: {
        path: "permissions",
        model: Permission,
        select: "label value",
      },
    });

    return res.status(200).send({ message: "Data fetched", users });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { _id: id },
      { $set: data },
      { new: true }
    );

    if (!user) {
      return res.status(404).send({ message: "User did not found" });
    }

    return res.status(200).send({ message: "User updated", user });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOneAndDelete({ _id: id });

    if (!user) {
      return res.status(404).send({ message: "User did not found" });
    }

    return res.status(200).send({ message: "User deleted" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const CHANGE_PASSWORD = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  data.password = md5(data.password);

  try {
    const user = await User.findOneAndUpdate(
      { _id: id },
      { $set: data },
      { new: true }
    );

    if (!user) {
      return res.status(404).send({ message: "User did not found" });
    }

    return res.status(200).send({ message: "User password changed", user });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
