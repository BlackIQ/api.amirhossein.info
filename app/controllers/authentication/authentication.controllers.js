import { UserModel as User } from "$models/index.js";

export const login = (req, res) => {
  const data = req.body;

  User.findOne(data)
    .then((user) => {
      if (user !== null) {
        res.status(200).send({
          id: user.id,
        });
      } else {
        res.status(401).send({
          error: "Sorry, but user is not founded.",
        });
      }
    })
    .catch((error) => {
      res.status(400).send({
        error: error.message,
      });
    });
};

export const register = (req, res) => {
  const data = req.body;

  if (data.username !== "" && data.password !== "") {
    const newUser = new User(data);
    newUser
      .save()
      .then((user) => {
        res.status(200).send({
          id: user.id,
        });
      })
      .catch((error) => {
        res.status(500).send({
          error: error.message,
        });
      });
  } else {
    res.status(500).send({
      error: "Sorry there is an error occurred. Can you ty again!?",
    });
  }
};
