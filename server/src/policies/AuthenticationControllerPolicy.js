const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Please provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `Please provide a password using the following rules:
              <br>
              1- It must contain ONLY the following characters: lower case, upper case, numbers
              <br>
              2- It must be at least 8 characters long (max 32 characters)
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}
