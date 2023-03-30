import { PersonalInfo } from "$models";

export const CREATE = async (req, res) => {
  const data = req.body;

  try {
    const personalInfo = await PersonalInfo.create(data);

    res.status(200).send(personalInfo);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const ALL = async (req, res) => {
  try {
    const personalInfos = await PersonalInfo.find();

    res.status(200).send(personalInfos);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  try {
    const personalInfo = await PersonalInfo.findById(id);

    if (personalInfo) {
      res.status(200).send(personalInfo);
    } else {
      res.status(404).send({ message: "PersonalInfo not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.params;

  try {
    const personalInfo = await PersonalInfo.findByIdAndDelete(id);

    if (personalInfo) {
      res.status(200).send({ message: "PersonalInfo deleted" });
    } else {
      res.status(404).send({ message: "PersonalInfo not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const personalInfo = await PersonalInfo.findByIdAndUpdate(id, data);

    if (personalInfo) {
      res.status(200).send({ message: "PersonalInfo updated" });
    } else {
      res.status(404).send({ message: "PersonalInfo not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
