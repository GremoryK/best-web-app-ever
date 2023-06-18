const {Article} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require("path");

class articleController {
    async create(req, res, next){
        try {
            let {name, content, userId, typeId} = req.body
            const {files} = req.files
            let fileName = uuid.v4() + ".jpg"
            files.mv(path.resolve(__dirname, '..', '..', 'static', fileName))
            const article = await Article.create({name: name, content: content, userId: userId, typeId: typeId, files: fileName})

            return res.json(article)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res){
        let {type, limit, page} = req.query

        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit

        let articles;

        if (!type) {
            articles = await Article.findAndCountAll({limit, offset})
        }

        if (type) {
            articles = await Article.findAndCountAll({where: {type}, limit, offset})
        }

        return res.json(articles)
    }

    async getOne(req, res) {
        const {id} = req.params

        const article = await Article.findOne(
            {
                where: {id}
            }
        )

        return res.json(article)
    }

    async delete(req, res){
        const {id} = req.params

        const article = await Article.findOne(
            {
                where: {id}
            }
        )

        if (article) {
            article.destroy()
        }

        return res.json(article)
    }
}

module.exports = new articleController()
