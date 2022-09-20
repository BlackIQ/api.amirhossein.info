const Message = require("../models/message.model");

const create = (req, res) => {
    const data = req.body;

    const newMessage = new Message(data);
    newMessage.save()
        .then((saved) => {
            if (data.name !== "" && data.message !== "") {
                const sendingData = {
                    message: "Message saved",
                    id: saved.id,
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

const readAll = (req, res) => {
    Message.find()
        .then((messages) => {
            const sendingData = {
                messages
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

const readOne = (req, res) => {
    const { id } = req.params;

    Message.findById(id)
        .then((message) => {
            const sendingData = {
                message,
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

const deleteOne = (req, res) =>{
    const { id } = req.params;

    Message.findByIdAndDelete(id)
        .then((deleted) => {
            const sendingData = {
                message: "Message deleted",
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
    readOne,
    deleteOne,
}