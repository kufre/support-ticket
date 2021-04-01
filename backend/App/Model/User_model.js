"use strict";
    const Model = require("@elucidate/Model");
    const RoleModel = require("./Role_model");

    class User extends Model{
      static get tableName() {
        return "user";
      }

      static relationMappings = {
        role: {
          relation: Model.HasManyRelation,
          modelClass: RoleModel,
          join: {
            from: 'user.role_id',
            to: 'role.id'
          }
        }
      };
      static get modifiers() {
        return {
          selectUserName(builder) {
            builder.select("id", "firstName");
          },
        };
      }
    }

    module.exports = User;