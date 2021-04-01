"use strict";
const Auth = require("./Auth");
const FormRequest = use("FormRequest");
let processLogin = Symbol("processLogin");
let validator = Symbol("validator");

class LoginController {
  constructor({ Controller, RoleRepository }) {
    this.Controller = Controller;
    this.roleRepo = RoleRepository;
  }
  /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | sends the response with generated token back to the caller.
    |
    */
  login = async (req, res, next) => {
    let validation = await this[validator](req.body);
    if (validation.success) {
      return await this[processLogin](req.body, res, next);
    } else {
      return res.status(200).json({
        errorStatus: true,
        validation,
      });
    }
  };

  /**
   * Process incoming login data.
   * @param {Array} data
   * @param {Response} res
   * @return User
   */
  [processLogin] = async (data, res) => {
    await this.Controller.processLogin(data)
      .then(async (user) => {
        let token = await Auth.generateToken(user);
        const {role_name} = await this.roleRepo.getRoleById(user.role_id);
        return res.status(200).send({
          errorStatus: false,
          token: token,
          role: role_name,
          user: user.userName,
        });
      })
      .catch((error) => {
        return res.status(200).send({
          errorStatus: true,
          msg: error.msg,
          error: error,
        });
      });
  };

  /**
   * Get a validator for an incoming login request.
   * @param {Array} record
   * @return Validator
   */
  [validator](record) {
    return FormRequest.make(record, {
      email: "required|string|email|max:255",
      password: "required|string|min:8",
    });
  }
}

module.exports = LoginController;
