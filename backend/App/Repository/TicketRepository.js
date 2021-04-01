const TicketMode = require("@model/Ticket_model");
let countCloseTicket = Symbol("countCloseTicket");
let countOpenTicket = Symbol("countOpenTicket");
let countReplyTicket = Symbol("countReplyTicket");
let countAllTicket = Symbol("countAllTicket");
class TicketRepository {
  createTicket = async (userId, { issue, subject, flag }) => {
    return await new Promise(async (resolve, reject) => {
      return await TicketMode.query()
        .insert({
          issueId: issue,
          userId: userId,
          subject: subject,
          message: "ok",
          flag: flag,
          status: "Open",
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };
  closeTicket = async (ticketId) => {
    return await new Promise(async (resolve, reject) => {
      await TicketMode.query()
        .findById(id)
        .patch({
          status: "Close",
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  reopenTicket = async (ticketId) => {
    return await new Promise(async (resolve, reject) => {
      await TicketMode.query()
        .findById(ticketId)
        .patch({
          status: "Open",
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  getAllRepliedTicket = async () => {
    return await new Promise(async (resolve, reject) => {
      await TicketMode.query()
        .where("status", "Reply")
        .withGraphFetched("[issue(selectIssueName), user(selectUserName)]")
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  getTicketByUser = async (userId) => {
    return await new Promise(async (resolve, reject) => {
      return await TicketMode.query()
        .where("userId", userId)
        .withGraphFetched("[issue(selectIssueName), user(selectUserName)]")
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  getAllTicket = async () => {
    return await new Promise(async (resolve, reject) => {
      await TicketMode.query()
        .withGraphFetched("[issue(selectIssueName), user(selectUserName)]")
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  getAllTicketStatus = async () => {
    const open = await this[countOpenTicket]();
    const close = await this[countCloseTicket]();
    const reply = await this[countReplyTicket]();
    const all = await this[countAllTicket]();
    return { open, close, reply, all };
  };
  [countCloseTicket] = async () => {
    return await new Promise(async (resolve, reject) => {
      await TicketMode.query()
        .count({ CloseTicket: "Status" })
        .where("status", "Close")
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  [countOpenTicket] = async () => {
    const result = await TicketMode.query()
      .count({ OpenTicket: "Status" })
      .where("status", "Open");
    return result;
  };
  [countReplyTicket] = async () => {
    return await TicketMode.query()
      .count({ ReplyTicket: "Status" })
      .where("status", "Reply");
  };
  [countAllTicket] = async () => {
    return await TicketMode.query().count({ AllTicket: "Status" });
  };
};

module.exports = TicketRepository

