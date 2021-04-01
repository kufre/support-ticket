"use strict";

class RoleController{
  constructor({ RoleRepository }) {
    this.roleRepo = RoleRepository;
  }

  index = async (req, res, next) => {
    try {
      return await this.roleRepo.getAllRole().then(result => {
        res.status(200).json(result);
      }).catch(err => {
        res.status(500).json(err)
      })
    } catch (error) {
      return next(error);
    }
  }
  store = async (req, res, next) => {
    const { name, description } = req.body;
    try {
      return await this.roleRepo.createRole(name, description).then(result => {
        res.status(200).json(result);
      }).catch(err => {
        res.status(500).json(err)
      })
    } catch (error) {
      return next(error);
    }
  }
  getOne = async (req, res, next) => {
    const id = req.params.id;
    try {
      return await this.roleRepo.getRoleById(id).then(result => {
        res.status(200).json(result);
      }).catch(err => {
        res.status(500).json(err)
      })
    } catch (error) {
      return next(error);
    }
  }
  update = async (req, res, next) => {
    const id = req.params.id;
    const { name, description } = req.body;
    try {
      return await this.roleRepo.updateRole(id, { name, description }).then(result => {
        res.status(200).json(result);
      }).catch(err => {
        res.status(500).json(err)
      })
    } catch (error) {
      return next(error);
    }
  }
  remove = async (req, res, next) => {
    const id = req.params.id;
    try {
      return await this.roleRepo.removeRole(id).then(result => {
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

module.exports = RoleController;
        