const fields = ['addresses']

module.exports = (req, res, next) => {
    let errors = fields.filter(field => !req.body[field])

    if (errors.length)
        return res.send(422, { status: false, message: 'parameter require', errors: errors })

    return next()
}