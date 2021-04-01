"use strict";
    const Model = require("@elucidate/Model");
    class Ticketmanger extends Model{
      static get tableName() {
        return "ticketmanger";
      }
    }

    module.exports = Ticketmanger;