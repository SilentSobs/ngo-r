const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoUri');


const connectDb = async () => {
    try {

        console.log("Trying Connection")

        await mongoose.connect(db);
        console.log("DB Connected")

    }catch(err) {

        console.error(err.message);
        process.exit(1);

    }
}

module.exports = connectDb

