const sequelize = require('../../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const UserInfo = sequelize.define('user_info', {
    userId: {type: DataTypes.INTEGER, unique: true},
    firstName: {type: DataTypes.STRING},
    lastName: {type: DataTypes.STRING},
    middleName: {type: DataTypes.STRING},
    birthday: {type: DataTypes.DATE},
    gender: {type: DataTypes.STRING},
    avatar: {type: DataTypes.STRING},
})

const UserStarredArticle = sequelize.define('user_starred_article', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: {type: DataTypes.INTEGER},
    articleId: {type: DataTypes.INTEGER},
})

const Article = sequelize.define('article', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: {type: DataTypes.INTEGER},
    type: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    content: {type: DataTypes.JSONB},
    isChecked: {type: DataTypes.BOOLEAN},
})

User.hasOne(UserInfo)
UserInfo.belongsTo(User)

User.hasMany(UserStarredArticle)
UserStarredArticle.belongsTo(User)

User.hasMany(Article)
Article.belongsTo(User)

Article.hasMany(UserStarredArticle)
UserStarredArticle.belongsTo(Article)

module.exports = {
    User,
    UserInfo,
    UserStarredArticle,
    Article,
}
