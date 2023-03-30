import { Social } from "$models";

export const CREATE = async (req, res) => {
  const data = req.body;

  try {
    const social = await Social.create(data);

    res.status(200).send(social);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const ALL = async (req, res) => {
  try {
    const socials = await Social.find();

    res.status(200).send(socials);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  try {
    const social = await Social.findById(id);

    if (social) {
      res.status(200).send(social);
    } else {
      res.status(404).send({ message: "Social not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.params;

  try {
    const social = await Social.findByIdAndDelete(id);

    if (social) {
      res.status(200).send({ message: "Social deleted" });
    } else {
      res.status(404).send({ message: "Social not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const social = await Social.findByIdAndUpdate(id, data);

    if (social) {
      res.status(200).send({ message: "Social updated" });
    } else {
      res.status(404).send({ message: "Social not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
