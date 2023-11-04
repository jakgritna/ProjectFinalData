module.exports = (sequelize, DataTypes) => {
    const Northeast = sequelize.define('Northeast', {
        name: DataTypes.STRING,
        province: DataTypes.STRING,
        detail: DataTypes.STRING,
        height: DataTypes.INTEGER
    })
    return Northeast
}