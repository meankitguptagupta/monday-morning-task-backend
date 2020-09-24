const service = require('../../services/address/store')

module.exports = (req, res) => {
    service(req.body).then(() => {
        return res.send(201, { status: true, message: 'Address successfully saved', data: {} })
    }).catch(err => {
        return res.send(422, { status: false, message: 'Unable to save address', error: err })
    })
}