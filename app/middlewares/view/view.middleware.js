import { ViewModel as View } from "$models/index.js";

export const saveView = (req, res, next) => {
  const headers = req.headers;

  const newView = new View({ from: headers["x-forwarded-for"] });
  newView
    .save()
    .then((view) => next())
    .catch((error) => next());
};
