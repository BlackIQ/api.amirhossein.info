import authServices from "$services/authentication/authentication.services.js";
import messageServices from "$services/message/message.services.js";
import logServices from "$services/log/log.services.js";

export default {
  authentication: () => authServices,
  message: () => messageServices,
  log: () => logServices,
};
