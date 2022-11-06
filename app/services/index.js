import authServices from "$services/authentication/authentication.services.js";
import messageServices from "$services/message/message.services.js";
import viewServices from "$services/view/view.services.js";

export default {
  authentication: () => authServices,
  message: () => messageServices,
  view: () => viewServices,
};
