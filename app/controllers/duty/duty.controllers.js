import { Duty } from "$models";

export const CREATE = async (req, res) => {
  const data = req.body;

  try {
    const duty = await Duty.create(data);

    res.status(200).send(duty);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const ALL = async (req, res) => {
  try {
    const dutys = await Duty.find();

    res.status(200).send(dutys);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  try {
    const duty = await Duty.findById(id);

    if (duty) {
      res.status(200).send(duty);
    } else {
      res.status(404).send({ message: "Duty not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.params;

  try {
    const duty = await Duty.findByIdAndDelete(id);

    if (duty) {
      res.status(200).send({ message: "Duty deleted" });
    } else {
      res.status(404).send({ message: "Duty not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const duty = await Duty.findByIdAndUpdate(id, data);

    if (duty) {
      res.status(200).send({ message: "Duty updated" });
    } else {
      res.status(404).send({ message: "Duty not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
