module.exports = (sequelize, DataTypes) => {
    const South = sequelize.define('South', {
        name: DataTypes.STRING,
        province: DataTypes.STRING,
        detail: DataTypes.STRING,
        height: DataTypes.INTEGER
    })
    return South
}