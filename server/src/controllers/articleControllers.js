const {Article} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')

class articleControllers {
    async createOne(req, res){
        const {name, is_checked} = req.body
    }
    async getAll(req, res){
        const article = await Article.findAll()
        return res.json(article)
    }
    async delete(req, res){

    }

}

module.exports = new articleControllers()
