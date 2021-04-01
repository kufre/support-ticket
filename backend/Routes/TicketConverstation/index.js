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

Route.group("/ticketconversation", ['auth'], () => {
  Route.post("/", "TicketConversationController@replyToTicket");
  Route.get("/:id", "TicketConversationController@getAllMessageByTicketId");
});


module.exports = Route.exec;
    