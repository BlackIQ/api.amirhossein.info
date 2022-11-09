import { LogModel as Log } from "$models/index.js";

export const readAll = (req, res) => {
  Log.find()
    .then((logs) => {
      res.status(200).send(logs);
    })
    .catch((error) => {
      res.status(400).send({
        error: error.message,
      });
    });
};
