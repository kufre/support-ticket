const TicketMode = require("@model/Ticket_model");

class TicketMangerRepository {

    
    createTicket = async (userId, {issue,subject,message,flag}) =>{
        return await new Promise(async (resolve, reject) => {
            await TicketMode.query().insert({
                issueId: issue,
                userId: userId,
                subject:subject,
                message:message,
                flag:flag,
                status:'Open'
            }).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err)
            })
        })
    }
    closeTicket = async (id) => {
        return await new Promise(async (resolve, reject) => {
            await TicketMode.query().findById(id).patch({
                status: 'Close',
            }).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err)
            })
        })
    }
    reopenTicket = async () => {

    }
    getAllOpenTicket = async () => {
        return await new Promise(async (resolve, reject) => {
            await TicketMode.query().where("status", "Open").withGraphFetched("[issue(selectIssueName), user(selectUserName)]").then(data => {
                resolve(data);
            }).catch(err => {
                reject(err)
            })
        })
    }
    getAllCloseTicket = async () => { 
        return await new Promise(async (resolve, reject) => {
            await TicketMode.query().where("status", "Close").withGraphFetched("[issue(selectIssueName), user(selectUserName)]").then(data => {
                resolve(data);
            }).catch(err => {
                reject(err)
            })
        })
    }
    getAllRepliedTicket = async () => { }

    
};

module.exports = TicketMangerRepository
