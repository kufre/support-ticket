"use strict";
    const Model = require("@elucidate/Model");
    const TicketModel = require("./Ticket_model");
    const UserModel = require("./User_model");

    class Ticketconversation extends Model {
      static get tableName() {
        return "ticketconversation";
      }
      static relationMappings = {
        tickets: {
          relation: Model.HasManyRelation,
          modelClass: TicketModel,
          join: {
            from: "ticketconversation.ticketId",
            to: "ticket.id",
          },
        },
        user: {
          relation: Model.HasManyRelation,
          modelClass: UserModel,
          join: {
            from: "ticketconversation.userId",
            to: "user.id",
          },
        },
      };
    }

    module.exports = Ticketconversation;