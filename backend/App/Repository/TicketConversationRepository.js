const TicketConversationModel = require("@model/TicketConversation_model");

class TicketConversationRepository {

    
    addTicketMessage = async (userId, { ticketId,message }) =>{
        return await new Promise(async (resolve, reject) => {
            await TicketConversationModel.query()
              .insert({
                ticketId: ticketId,
                userId: userId,
                message: message,
              })
              .then((data) => {
                resolve(data);
              })
              .catch((err) => {
                console.log(err);
                reject(err);
              });
        })
    }
    
    getAllTicketMessgae = async (ticketId) => { 
        return await new Promise(async (resolve, reject) => {
            await TicketConversationModel.query()
              .select("id", "message")
              .where("ticketId", ticketId)
              .withGraphFetched(
                "[tickets(selectTicketSubject), user(selectUserName)]"
              )
              .then((data) => {
                resolve(data);
              })
              .catch((err) => {
                console.log(err);
                reject(err);
              });
        });
    }
};

module.exports = TicketConversationRepository;
