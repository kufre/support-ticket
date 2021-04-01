"use strict";
const Model = require("@elucidate/Model");
const IssueModel = require("./Issue_model");
const UserModel = require("./User_model");

class Ticket extends Model {
  static get tableName() {
    return "ticket";
  }

  static relationMappings = {
    issue: {
      relation: Model.HasManyRelation,
      modelClass: IssueModel,
      join: {
        from: "ticket.issueId",
        to: "issue.id",
      },
    },
    user: {
      relation: Model.HasManyRelation,
      modelClass: UserModel,
      join: {
        from: "ticket.userId",
        to: "user.id",
      },
    },
  };
  static get modifiers() {
    return {
      selectTicketSubject(builder) {
        builder.select("id", "subject","status");
      },
    };
  }
}

module.exports = Ticket;