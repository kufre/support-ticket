"use strict";

class TicketController{
    constructor({ TicketRepository }) {
        this.ticketRepo = TicketRepository;
    }

    assignTicketToAgent = async (req, res, next) => {
        const {issue,subject,message,flag,status} = req.body;
        try {
            return await this.ticketRepo.createTicket(req.user.id, { issue, subject, message, flag, status }).then(result => {
                res.status(200).json(result);
            }).catch(err => {
                res.status(500).json(err)
            })
        } catch (error) {
            return next(error);
        }
    }
    closeTicket = async (req, res, next) => {
        const ticketId = req.params.id
        try {
            return await this.ticketRepo.closeTicket(ticketId).then(result => {
                res.status(200).json(result);
            }).catch(err => {
                res.status(500).json(err)
            })
        } catch (error) {
            return next(error);
        }
    }
    getAllAssignTicketForAgent = async (req, res, next) => {
        try {
            return await this.ticketRepo.getAllOpenTicket().then(result => {
                // valide is it empty
                res.status(200).json(result);
            }).catch(err => {
                res.status(500).json(err)
            })
        } catch (error) {
            return next(error);
        }
    }
   
    
}

module.exports = TicketController;
