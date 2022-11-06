import { UserModel as User } from "$models/index.js";

export const login = (req, res) => {
  const data = req.body;

  User.findOne(data)
    .then((user) => {
      if (user) {
        res.status(401).send({
          error: "Sorry, but user is not founded.",
        });
      } else {
        res.status(200).send({
          id: user.id,
        });
      }
    })
    .catch((error) => {
      const sendingData = {
        error: error.message,
      };
      res.status(400).send(sendingData);
    });
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
