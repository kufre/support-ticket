"use strict";
    const Model = require("@elucidate/Model");
    class Role extends Model{
      static get tableName() {
        return "role";
      }
      static get modifiers() {
        return {
          selectName(builder) {
            builder.select("id", "role_name");
          },
        };
      }
    }

    module.exports = Role;