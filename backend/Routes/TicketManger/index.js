"use strict";
      const Route = require("@routerManager");
       
      /*
      |--------------------------------------------------------------------------
      | TicketManger Route File   
      |--------------------------------------------------------------------------
      |
      | Example of closure route 
      | 
      | Route.get("/",(req,res)=>{}); 
      |
      | Example of controller route.
      |
      | Route.get("/","UserController@index);
      | 
      */

      Route.group("/ticketManger", () => {
        Route.post("/assign", "TicketController@createTicket");
        Route.post("/close", "TicketController@createTicket");
        Route.post("/agentticket", "TicketController@createTicket");
      });
        

      module.exports = Route.exec;
    