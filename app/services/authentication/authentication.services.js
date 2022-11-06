import { Authentication } from "$controllers/index.js";

export default {
  login: Authentication.login,
  register: Authentication.register,
};
