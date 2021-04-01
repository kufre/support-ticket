"use strict";

class TicketConversationController {
  constructor({ TicketConversationRepository }) {
    this.ticketonversationRepo = TicketConversationRepository;
  }
  replyToTicket = async (req, res, next) => {
    const { ticketId, message } = req.body;
    try {
      return await this.ticketonversationRepo
        .addTicketMessage(req.user.id, { ticketId, message })
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    } catch (error) {
      return next(error);
    }
  };
  getAllMessageByTicketId = async (req, res, next) => {
    const ticketId = req.params.id;
    try {
      return await this.ticketonversationRepo
        .getAllTicketMessgae(ticketId)
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    } catch (error) {
      return next(error);
    }
  };
}

module.exports = TicketConversationController;
