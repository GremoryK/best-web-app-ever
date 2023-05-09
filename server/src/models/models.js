const sequelize = require('../../db')
const {DataTypes} = require('sequelize')

const user = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
})

const user_info = sequelize.define('user_info', {
    user_id: {type: DataTypes.INTEGER, unique: true},
    first_name: {type: DataTypes.STRING},
    last_name: {type: DataTypes.STRING},
    middle_name: {type: DataTypes.STRING},
    birthday: {type: DataTypes.DATE},
    gender: {type: DataTypes.STRING},
    avatar: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const user_starred_article = sequelize.define('user_starred_article', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    user_id: {type: DataTypes.INTEGER,},
    article_id: {type: DataTypes.INTEGER},
})

const article = sequelize.define('article', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    user_id: {type: DataTypes.INTEGER,},
    name: {type: DataTypes.STRING},
    is_checked: {type: DataTypes.BOOLEAN},
})

const article_component = sequelize.define('article_component', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    component_type_id: {type: DataTypes.INTEGER,},
    article_id: {type: DataTypes.INTEGER},
    component_content: {type: DataTypes.STRING}
})

const component_type = sequelize.define('component_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

user.hasOne(user_info)
user_info.belongsTo(user)

user.hasMany(user_starred_article)
user_starred_article.belongsTo(user)

user.hasMany(article)
article.belongsTo(user)

article.hasMany(user_starred_article)
user_starred_article.belongsTo(article)

article.hasMany(article_component)
article_component.belongsTo(article)

component_type.hasMany(article_component)
article_component.belongsTo(component_type)

module.exports = {
    user,
    user_info,
    user_starred_article,
    article,
    article_component,
    component_type
}