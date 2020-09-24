const Model = require('../../models/address')

/**
 * Save multiple address in single call
 * 
 * @param Array arr 
 * 
 * @return Promise
 */
module.exports = (arr) => {
    return Model.insertMany(arr)
}