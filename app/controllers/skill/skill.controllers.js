import { Skill } from "$models";

export const CREATE = async (req, res) => {
  const data = req.body;

  try {
    const skill = await Skill.create(data);

    res.status(200).send(skill);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const ALL = async (req, res) => {
  try {
    const skills = await Skill.find();

    const skillsById = {};
    skills.forEach((skill) => (skillsById[skill.id] = skill));

    const clean = [];

    skills.map((skill) => {
      if (skill.parent === null) {
        clean.push({ _id: skill._id, name: skill.name, children: [] });
      } else {
        const parent = skillsById[skill.parent];

        if (!parent.children) {
          parent.children = [];
        }

        clean
          .find((skl) => String(skl._id) === String(skill.parent))
          .children.push({ _id: skill._id, name: skill.name });
      }
    });

    res.status(200).send(clean);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  try {
    const skill = await Skill.findById(id);

    if (skill) {
      res.status(200).send(skill);
    } else {
      res.status(404).send({ message: "Skill not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.params;

  try {
    const skill = await Skill.findByIdAndDelete(id);

    if (skill) {
      res.status(200).send({ message: "Skill deleted" });
    } else {
      res.status(404).send({ message: "Skill not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const skill = await Skill.findByIdAndUpdate(id, data);

    if (skill) {
      res.status(200).send({ message: "Skill updated" });
    } else {
      res.status(404).send({ message: "Skill not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
