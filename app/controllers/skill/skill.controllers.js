import { Skill } from "$app/models/index.js";

export const CREATE = async (req, res) => {
  const data = req.body;

  try {
    const skill = await Skill.create(data);

    return res.status(200).send(skill);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const ALL = async (req, res) => {
  try {
    const skills = await Skill.find();

    return res.status(200).send(skills);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  try {
    const skill = await Skill.findById(id);

    if (!skill) {
      return res.status(404).send({ message: "Skill did not found" });
    }

    return res.status(200).send(skill);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.params;

  try {
    const skill = await Skill.findByIdAndDelete(id);

    if (!skill) {
      return res.status(404).send({ message: "Skill did not found" });
    }

    return res.status(200).send({ message: "Skill deleted" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const skill = await Skill.findByIdAndUpdate(id, data);

    if (!skill) {
      return res.status(404).send({ message: "Skill did not found" });
    }

    return res.status(200).send({ message: "Skill updated" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
