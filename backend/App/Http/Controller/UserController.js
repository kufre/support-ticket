"use strict";

class UserController{
    constructor({ UserRepository }) {
        this.userRepo = UserRepository;
    }

    getAllAdminUser = async (req, res, next) => {
        try {
            return await this.userRepo.getAllAdminUser().then(result => {
                res.status(200).json(result);
            }).catch(err => {
                res.status(500).json(err)
            })
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = UserController;
        