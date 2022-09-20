const User = require("../models/user.model");

const login = (req, res) => {
    const data = req.body;

    User.find(data)
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
}

const register = (req, res) => {
    const data = req.body;

    const newUser = new User(data);
    newUser.save()
        .then((user) => {
            if (data.username !== "" && data.password !== "") {
                const sendingData = {
                    id: user.id,
                };
                res.status(200).send(sendingData);                
            } else {
                const sendingData = {
                    error: "Sorry there is an error occurred. Can you ty again!?",
                }
                res.status(403).send(sendingData);
            }
        })
        .catch((error) => {
            const sendingData = {
                error: error.message,
            };
            res.status(400).send(sendingData);
        });
}

module.exports = {
    login,
    register,
}