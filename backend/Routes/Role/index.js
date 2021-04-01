"use strict";
const Route = require("@routerManager");

/*
|--------------------------------------------------------------------------
| Issue Route File   
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

Route.group("/role", () => {
  Route.get("/", "RoleController@index");
  Route.get("/:id", "RoleController@getOne");
  Route.post("/", "RoleController@store");
  Route.put("/:id", "RoleController@update");
  Route.delete("/:id", "RoleController@remove");
});


module.exports = Route.exec;
