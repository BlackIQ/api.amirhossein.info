import { ViewModel as View } from "$models/index.js";

export const readAll = (req, res) => {
  View.find()
    .then((views) => {
      const sendingData = {
        views,
      };
      res.status(200).send(sendingData);
    })
    .catch((error) => {
      const sendingData = {
        error: error.message,
      };
      res.status(400).send(sendingData);
    });
};
