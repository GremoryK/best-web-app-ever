const sequelize = require('../../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const UserInfo = sequelize.define('user_info', {
    firstName: {type: DataTypes.STRING},
    lastName: {type: DataTypes.STRING},
    middleName: {type: DataTypes.STRING},
    birthday: {type: DataTypes.DATE},
    gender: {type: DataTypes.STRING},
})


const Article = sequelize.define('article', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
    files: {type: DataTypes.STRING},

})
const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},

})

User.hasOne(UserInfo)
UserInfo.belongsTo(User)

User.hasMany(Article)
Article.belongsTo(User)

Type.hasMany(Article)
Article.belongsTo(Type)


module.exports = {
    User,
    UserInfo,
    Article,
    Type,
}
