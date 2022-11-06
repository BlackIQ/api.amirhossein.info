import { UserModel as User } from "$models/index.js";

export const login = (req, res) => {
  const data = req.body;

  if (data.username !== "" && data.password !== "") {
    User.findOne(data)
      .then((user) => {
        if (user === null) {
          const sendingData = {
            error: "Sorry, but user is not founded.",
          };
          res.status(401).send(sendingData);
        } else {
          const sendingData = {
            id: user.id,
          };
          res.status(200).send(sendingData);
        }
      })
      .catch((error) => {
        const sendingData = {
          error: error.message,
        };
        res.status(400).send(sendingData);
      });
  } else {
    const sendingData = {
      error: "Fill all blanks first.",
    };
    res.status(401).send(sendingData);
  }
};

export const register = (req, res) => {
  const data = req.body;

  if (data.username !== "" && data.password !== "") {
    const newUser = new User(data);
    newUser
      .save()
      .then((user) => {
        const sendingData = {
          id: user.id,
        };
        res.status(200).send(sendingData);
      })
      .catch((error) => {
        const sendingData = {
          error: error.message,
        };
        res.status(400).send(sendingData);
      });
  } else {
    const sendingData = {
      error: "Sorry there is an error occurred. Can you ty again!?",
    };
    res.status(401).send(sendingData);
  }
};
