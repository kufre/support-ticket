const IssueModel = require("@model/Issue_model");

class IssueRepository {

	createIssue = async (name,description) => {
		return await new Promise(async (resolve, reject) => {
			await IssueModel.query().insert({
				issue_name:name,
				description:description
			}).then(data => {
				resolve(data);
			}).catch(err => {
				reject(err)
			})
		})
	}
	getAllIssue = async () => { 
		return await new Promise(async (resolve, reject) => {
			await IssueModel.query().then(data => {
				resolve(data);
			}).catch(err => {
				reject(err)
			})
		})
	}
	getIssueById = async (id) => {
		return await new Promise(async (resolve, reject) => {
			await IssueModel.query().findOne({id: id}).then(data => {
				resolve(data);
			}).catch(err => {
				reject(err)
			})
		})
	}
	updateIssue = async (id,{name, description}) => {
		return await new Promise(async (resolve, reject) => {
			await IssueModel.query().findById(id).patch({ 
				issue_name: name,
				description: description
			}).then(data => {
				resolve(data);
			}).catch(err => {
				reject(err)
			})
		})
	}
	removeIssue = async (id) => {
		return await new Promise(async (resolve, reject) => {
			await IssueModel.query().findById(id).delete().where({id}).then(data => {
				resolve(data);
			}).catch(err => {
				reject(err)
			})
		})
	}
};

module.exports = IssueRepository;