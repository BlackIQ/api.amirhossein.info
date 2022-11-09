import { LogModel as Log } from "$models/index.js";

export const saveLog = (req, res, next) => {
  const headers = req.headers;

  const data = { ip: headers["x-forwarded-for"] };

  const newLog = new Log(data);
  newLog
    .save()
    .then((log) => next())
    .catch((error) => next());
};
