"use strict";

class IssueController{
 
  constructor({IssueRepository}){
    this.issueRepo = IssueRepository;
  }

  index = async(req,res,next) => {
    try {
      return await this.issueRepo.getAllIssue().then(result => {
        res.status(200).json(result);
      }).catch(err => {
        res.status(500).json(err)
      })
    } catch (error) {
      return next(error);
    }
  }
  store = async (req, res, next) => {
    const {name, description } = req.body;
    try {
      return await this.issueRepo.createIssue(name,description).then(result => {
        res.status(200).json(result);
      }).catch(err =>{
        res.status(500).json(err)
      })
    } catch (error) {
      return next(error);
    }
  }
  getOne = async (req, res, next) => {
    const id = req.params.id;
    try {
      return await this.issueRepo.getIssueById(id).then(result => {
        res.status(200).json(result);
      }).catch(err => {
        res.status(500).json(err)
      })
    } catch (error) {
      return next(error);
    }
  }
  update = async (req,res, next) => {
    const id = req.params.id;
    const {name, description} = req.body;
    try {
      return await this.issueRepo.updateIssue(id,{name,description}).then(result => {
        res.status(200).json(result);
      }).catch(err => {
        res.status(500).json(err)
      })
    } catch (error) {
      return next(error);
    }
  }
  remove = async (req,res,next) => {
    const id = req.params.id;
    try {
      return await this.issueRepo.removeIssue(id).then(result => {
        res.status(200).json(result);
      }).catch(err => {
        console.log(err);
        res.status(500).json(err)
      })
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = IssueController;
