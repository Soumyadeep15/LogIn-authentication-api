const db = require('../database')
const user = db.user

const createNewUser = async(req, res) => {
    const {email, password} = req.body
    await user.create({email, password})
    res.status(200).json({
        message: 'sign in successfully'
    })
}

const authenticate = async(req, res) => {
    const {email, password} = req.body

    const data = await user.findOne({where: {email}})

    if(!data) res.status(200).json({ message: 'invalid'})

    if(password === data.password) 
        res.status(200).json({
            message: 'user login successfully',
    })
    else 
        res.status(200).json({
            message: 'wrong email or password',
    })

}

module.exports = { createNewUser, authenticate }