"use strict";
      const Route = require("@routerManager");
       
      /*
      |--------------------------------------------------------------------------
      | Auth Route File   
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

      Route.group("/auth", () => {
        Route.post("/register", "Auth/RegisterController@register");
        Route.post("/login", "Auth/LoginController@login");
      });
        

      module.exports = Route.exec;
    