module.exports = (sequelize, DataTypes) => {
    const WesternRegion = sequelize.define('WesternRegion', {
        name: DataTypes.STRING,
        province: DataTypes.STRING,
        detail: DataTypes.STRING,
        height: DataTypes.INTEGER
    })
    return WesternRegion
}