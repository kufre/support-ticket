const UserModel = require("@model/User_model");

class UserRepository {

    getAllAdminUser = async () => {
        return await new Promise(async (resolve, reject) => {
            await UserModel.query().withGraphFetched("role(selectName)").then(data => {
                resolve(data);
            }).catch(err => {
                reject(err)
            })
        })
    }
    getAdminByRole = async (id) => {
        return await new Promise(async (resolve, reject) => {
            await UserModel.query().findOne({ id: id }).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err)
            })
        })
    }
    getAdminByEmail = async (id, { name, description }) => {
        return await new Promise(async (resolve, reject) => {
            await UserModel.query().findById(id).patch({
                issue_name: name,
                description: description
            }).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err)
            })
        })
    }
    
    
};

module.exports = UserRepository;