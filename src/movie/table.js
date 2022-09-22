const { DataTypes } = require("sequelize");
const { validate } = require("../../../../Week7/crud_mongoose_db/src/movie/movieModel");
const { sequelize } = require('../db/connection');

const Movie = sequelize.define("Movie", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    actor: {
        type: DataTypes.STRING,
        defaultValue: "Not Specified",
    }
})

module.exports = Movie;