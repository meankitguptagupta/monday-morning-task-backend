const repository = require('../../repositories/address/store')

module.exports = (data) => {
    return new Promise((resolve, reject) => {
        repository(data.addresses).then(() => {
            return resolve(null)
        }).catch(err => {
            return reject(err.message)
        })
    })
}