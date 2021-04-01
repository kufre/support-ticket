const ioc = require("expressweb-ioc");

class AppServiceProvider {
  /**
   * Register application services.
   */
  register() {
    return {
      IssueRepository: ioc.asClass(
        "App/Repository/IssueRepository",
        "SINGLETON"
      ),
      RoleRepository: ioc.asClass("App/Repository/RoleRepository", "SINGLETON"),
      UserRepository: ioc.asClass("App/Repository/UserRepository", "SINGLETON"),
      TicketRepository: ioc.asClass(
        "App/Repository/TicketRepository",
        "SINGLETON"
      ),
      TicketMangerRepository: ioc.asClass(
        "App/Repository/TicketMangerRepository",
        "SINGLETON"
      ),
      TicketConversationRepository: ioc.asClass(
        "App/Repository/TicketConversationRepository",
        "SINGLETON"
      ),
    };
  }
  
  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  boot() {
    //
  }
}

module.exports = AppServiceProvider;
