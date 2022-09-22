# API

I needed some stuff to save for now and later. I just created this simple API.

## Endpoints

| Method | Endpoint | Body | Result | Usage |
| :-: | :- | :- | :- | :- |
| GET | `/v1/view` | - | `[{}, {}]` | Get count of views |
| POST | `/v1/view` | - | `{message: "View saved"}` | Insert a new view |
| POST | `/v1/message` | `{email, name, message}` | `{message: "Message saved"}` | Insert a new message |
| GET | `/v1/message` | - | `[{}, {}]` | Read all messages |
| GET | `/v1/message/:id` | - | `{}` | Get one message |
| DELETE | `/v1/message/:id` | - | `{message: "Message deleted"}` | Delete one message |
| POST | `/v1/authentication/login` | `{username, password}` | `{id: "User id"}` | Authenticate user |