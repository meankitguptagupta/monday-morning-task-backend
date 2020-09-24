const mongoose = require('mongoose');

module.exports = mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`, {
    auth: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    },
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})