"use strict";
    const Model = require("@elucidate/Model");
    class Issue extends Model{
      static get tableName() {
        return "issue";
      }
      static get modifiers() {
        return {
          selectIssueName(builder) {
            builder.select("id", "issue_name");
          }
        };
      }
    }

    module.exports = Issue;