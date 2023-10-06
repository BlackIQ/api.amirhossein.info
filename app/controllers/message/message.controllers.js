import { Message } from "$models";

export const CREATE = async (req, res) => {
  const data = req.body;

  try {
    await Message.create(data);

    if (!data.message) {
      return res.status(400).send({ message: "Fill message" });
    }
    if (!data.name) {
      return res.status(400).send({ message: "Fill name" });
    }

    res.status(200).send({ message: "Thanks for your message" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const ALL = async (req, res) => {
  try {
    const messages = await Message.find();

    res.status(200).send(messages);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  try {
    const message = await Message.findById(id);

    if (message) {
      res.status(200).send(message);
    } else {
      res.status(404).send({ message: "Message not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.params;

  try {
    const message = await Message.findByIdAndDelete(id);

    if (message) {
      res.status(200).send({ message: "Message deleted" });
    } else {
      res.status(404).send({ message: "Message not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const message = await Message.findByIdAndUpdate(id, data);

    if (message) {
      res.status(200).send({ message: "Message updated" });
    } else {
      res.status(404).send({ message: "Message not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};