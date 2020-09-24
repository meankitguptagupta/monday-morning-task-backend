const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    AddressSchema = new Schema({
        address: {
            type: String,
            trim: true,
            required: true,
            lowercase: true
        },
        street: {
            type: String,
            trim: true,
            required: true,
            lowercase: true
        },
        city: {
            type: String,
            trim: true,
            required: true,
            lowercase: true
        },
        country: {
            type: String,
            trim: true,
            required: true,
            lowercase: true
        }
    }, {
        strict: true,
        timestamps: true
    })

module.exports = mongoose.model('address', AddressSchema)