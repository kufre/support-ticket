"use strict";
const Route = require("@routerManager");
  
/*
|--------------------------------------------------------------------------
| Ticket Route File   
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

Route.group("/ticket", ['auth'], () => {
  Route.post("/", "TicketController@createTicket");
  Route.put("/:id", "TicketController@closeTicket");
  Route.get("/user", "TicketController@getTicketByUser");
  Route.get("/status", "TicketController@getTicketStatus");
  Route.get("/open", "TicketController@getAllOpenTicket");
  Route.get("/close", "TicketController@getAllCloseTicket");
  Route.get("/reply", "TicketController@getAllCloseTicket");
  Route.get("/", "TicketController@getAllTicket");
});


module.exports = Route.exec;
    