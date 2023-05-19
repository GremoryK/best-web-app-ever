const {Article, ArticleComponent, ComponentType} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')

class articleController {
    async create(req, res, next){
        try {
            let {name, type, content} = req.body
            const article = await Article.create({type: type, name: name, content: content, isChecked: false})

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
