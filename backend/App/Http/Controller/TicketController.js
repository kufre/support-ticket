"use strict";

class TicketController {
  constructor({ TicketRepository, TicketConversationRepository }) {
    this.ticketRepo = TicketRepository;
    this.ticketMessageRepo = TicketConversationRepository;
  }

  createTicket = async (req, res, next) => {
    const { issue, subject, message, flag } = req.body;
    try {
      return await this.ticketRepo
        .createTicket(req.user.id, { issue, subject, flag })
        .then((result) => {
          let ticketId = result.id;
          const response = this.ticketMessageRepo.addTicketMessage(
            req.user.id,
            { ticketId, message }
          );
          if (response.id == 0) {
            res.status(200).json({
              errorStataus: true,
              message: "error create ticket",
              data: result,
            });
          }
          res.status(200).json({
            errorStataus: false,
            message: "ok",
            data: result,
          });
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    } catch (error) {
      return next(error);
    }
  };
  closeTicket = async (req, res, next) => {
    const ticketId = req.params.id;
    try {
      return await this.ticketRepo
        .closeTicket(ticketId)
        .then((result) => {
          res.status(200).json({
            errorStataus: false,
            data: result,
            message: "ok",
          });
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    } catch (error) {
      return next(error);
    }
  };
  getAllOpenTicket = async (req, res, next) => {};
  getAllCloseTicket = async (req, res, next) => {
    try {
      return await this.ticketRepo
        .getAllCloseTicket()
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
  getTicketByUser = async (req, res, next) => {
    try {
      return await this.ticketRepo
        .getTicketByUser(req.user.id)
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
  getTicketStatus = async (req, res, next) => {
    try {
      return await this.ticketRepo
        .getAllTicketStatus()
        .then((result) => {
          // valide is it empty
          res.status(200).json(result);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    } catch (error) {
      return next(error);
    }
  };
  getAllTicket = async (req, res, next) => {
    try {
      return await this.ticketRepo
        .getAllTicket()
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = TicketController;
