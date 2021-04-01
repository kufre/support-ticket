const RoleModel = require("@model/Role_model");

class IssueRepository {

    createRole = async (name, description) => {
        return await new Promise(async (resolve, reject) => {
            await RoleModel.query().insert({
                role_name: name,
                description: description
            }).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err)
            })
        })
    }
    getAllRole = async () => {
        return await new Promise(async (resolve, reject) => {
            await RoleModel.query().then(data => {
                resolve(data);
            }).catch(err => {
                reject(err)
            })
        })
    }
    getRoleById = async (id) => {
        return await new Promise(async (resolve, reject) => {
            await RoleModel.query()
              .select("id", "role_name")
              .findOne({ id: id })
              .then((data) => {
                resolve(data);
              })
              .catch((err) => {
                reject(err);
              });
        })
    }
    updateRole = async (id, { name, description }) => {
        return await new Promise(async (resolve, reject) => {
            await RoleModel.query().findById(id).patch({
                role_name: name,
                description: description
            }).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err)
            })
        })
    }
    removeRole = async (id) => {
        return await new Promise(async (resolve, reject) => {
            await RoleModel.query().findById(id).delete().where({ id }).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err)
            })
        })
    }
};

module.exports = IssueRepository;