import { Experience } from "$models";

export const CREATE = async (req, res) => {
  const data = req.body;

  try {
    const experience = await Experience.create(data);

    res.status(200).send(experience);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const ALL = async (req, res) => {
  try {
    const experiences = await Experience.find().populate([
      {
        path: "skills",
        select: "name id",
      },
      {
        path: "duties",
        select: "name id",
      },
    ]);

    res.status(200).send(experiences);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  try {
    const experience = await Experience.findById(id);

    if (experience) {
      res.status(200).send(experience);
    } else {
      res.status(404).send({ message: "Experience not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.params;

  try {
    const experience = await Experience.findByIdAndDelete(id);

    if (experience) {
      res.status(200).send({ message: "Experience deleted" });
    } else {
      res.status(404).send({ message: "Experience not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const experience = await Experience.findByIdAndUpdate(id, data);

    if (experience) {
      res.status(200).send({ message: "Experience updated" });
    } else {
      res.status(404).send({ message: "Experience not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
