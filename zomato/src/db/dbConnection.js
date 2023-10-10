const mongoose = require('mongoose');
const config = require("../config/config");

const connectDB = async () => {
    mongoose
    .connect(config.mongodb.url,config.mongodb.options)
    .then((data) =>{
        console.log("Database Connection Successfully connected!");
    })
    .catch((error) => {
        console.log("Database Connection error:",error);
    });
};
module.exports = {connectDB};