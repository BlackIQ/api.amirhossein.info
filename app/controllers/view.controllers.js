const View = require("../models/view.model");

const create = (req, res) => {
    const newUser = new View({test: "Test"});
    newUser.save()
        .then((view) => {
            const sendingData = {
                id: view.id,
            };
            res.status(200).send(sendingData);
        })
        .catch((error) => {
            const sendingData = {
                error: error.message,
            };
            res.status(400).send(sendingData);
        });
}

const readAll = (req, res) => {
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
}

module.exports = {
    create,
    readAll,
}