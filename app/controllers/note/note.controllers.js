import { Note } from "$models";

export const CREATE = async (req, res) => {
  const data = req.body;

  try {
    const note = await Note.create(data);

    res.status(200).send(note);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const ALL = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });

    res.status(200).send(notes);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findById(id);

    if (note) {
      await Note.findOneAndUpdate({ _id: id }, { $inc: { view: 1 } });

      res.status(200).send(note);
    } else {
      res.status(404).send({ message: "Note not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findByIdAndDelete(id);

    if (note) {
      res.status(200).send({ message: "Note deleted" });
    } else {
      res.status(404).send({ message: "Note not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const note = await Note.findByIdAndUpdate(id, data);

    if (note) {
      res.status(200).send({ message: "Note updated" });
    } else {
      res.status(404).send({ message: "Note not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const CLAP = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findById(id);

    if (note) {
      await Note.findOneAndUpdate({ _id: id }, { $inc: { view: 1 } });

      res.status(200).send(note);
    } else {
      res.status(404).send({ message: "Thanks!" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
