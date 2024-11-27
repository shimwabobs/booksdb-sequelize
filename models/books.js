import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const Book= sequelize.define("books",{
    title: {
        type: DataTypes.STRING,
        allowNull:false
    },
    author: {
        type: DataTypes.STRING,
        allowNull:false
    },
    genre: {
        type: DataTypes.STRING
    },
    published_year: {
        type: DataTypes.INTEGER
    }
});

export default Book;