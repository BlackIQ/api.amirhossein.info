import { Message } from "$controllers/index.js";

export default {
  create: Message.create,
  deleteOne: Message.deleteOne,
  readOne: Message.readOne,
  readAll: Message.readAll,
};
