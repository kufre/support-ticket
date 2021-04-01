"use strict";
      const Route = require("@routerManager");
       
      /*
      |--------------------------------------------------------------------------
      | User Route File   
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

      Route.group("/users", () => {
        Route.get("/", "UserController@getAllAdminUser");
      });
        

      module.exports = Route.exec;
    