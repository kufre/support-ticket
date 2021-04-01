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

Route.group("/issue", ['auth'], () => {
        Route.get("/", "IssueController@index");
        Route.get("/:id", "IssueController@getOne");
        Route.post("/", "IssueController@store");
        Route.put("/:id", "IssueController@update");
        Route.delete("/:id", "IssueController@remove");
      });
        
      
      module.exports = Route.exec;
    