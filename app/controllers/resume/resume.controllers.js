import { Resume } from "$models";

export const CREATE = async (req, res) => {
  const data = req.body;

  try {
    const resume = await Resume.create(data);

    res.status(200).send(resume);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const ALL = async (req, res) => {
  try {
    const resumes = await Resume.find();

    res.status(200).send(resumes);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  try {
    const resume = await Resume.findById(id);

    if (resume) {
      res.status(200).send(resume);
    } else {
      res.status(404).send({ message: "Resume not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.params;

  try {
    const resume = await Resume.findByIdAndDelete(id);

    if (resume) {
      res.status(200).send({ message: "Resume deleted" });
    } else {
      res.status(404).send({ message: "Resume not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const resume = await Resume.findByIdAndUpdate(id, data);

    if (resume) {
      res.status(200).send({ message: "Resume updated" });
    } else {
      res.status(404).send({ message: "Resume not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
