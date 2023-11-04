module.exports = (sequelize, DataTypes) => {
    const TheNorth = sequelize.define('TheNorth', {
        name: DataTypes.STRING,
        province: DataTypes.STRING,
        detail: DataTypes.STRING,
        height: DataTypes.INTEGER
    })
    return TheNorth
}