module.exports = (sequelize, DataTypes) => {
    const EasternRegion = sequelize.define('EasternRegion', {
        name: DataTypes.STRING,
        province: DataTypes.STRING,
        detail: DataTypes.STRING,
        height: DataTypes.INTEGER
    })
    return EasternRegion
}