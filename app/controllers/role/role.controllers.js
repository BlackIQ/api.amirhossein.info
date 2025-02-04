import { Role, Permission } from "$app/models/index.js";

export const CREATE = async (req, res) => {
  const data = req.body;

  try {
    const role = await Role.create(data);

    return res.status(200).send({ message: "Role created", role });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const ALL = async (req, res) => {
  try {
    const roles = await Role.find().populate({
      path: "permissions",
      model: Permission,
      select: "label value",
    });

    return res.status(200).send({ message: "Data fetched", roles });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  try {
    const role = await Role.findOne({ _id: id });

    if (!role) {
      return res.status(404).send({ message: "Role did not found" });
    }

    return res.status(200).send({ message: "Role found", role });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const role = await Role.findOneAndUpdate(
      { _id: id },
      { $set: data },
      { new: true }
    );

    if (!role) {
      return res.status(404).send({ message: "Role did not found" });
    }

    return res.status(200).send({ message: "Role updated", role });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.params;

  try {
    const role = await Role.findOneAndDelete({ _id: id });

    if (!role) {
      return res.status(404).send({ message: "Role did not found" });
    }

    return res.status(200).send({ message: "Role deleted" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
