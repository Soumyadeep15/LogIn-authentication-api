const db = require('../database')
const bcrypt = require('bcrypt')
const user = db.user

const signUp = async (req, res) => {
    let { email, password } = req.body
    const hashedPassword = bcrypt.hashSync(password, 10)

    password = hashedPassword
    
    await user.create({ email, password })
    res.status(200).json({
        message: 'sign in successfully'
    })
}

const logIn = async (req, res) => {
    const { email, password } = req.body

    const data = await user.findOne({ where: { email } })

    if (!data) res.status(200).json({ message: 'invalid email' })

    // if(password === data.password) 
    //     res.status(200).json({
    //         message: 'user login successfully',
    // })
    // else 
    //     res.status(200).json({
    //         message: 'wrong email or password',
    // })
    const isPasswordValid = await bcrypt.compare(password, data.password)

    if (isPasswordValid)
        res.status(200).json({
            message: 'user login successfully'
        })
    else
        res.status(200).json({
            message: 'wrong email or password',
        })

}

module.exports = { signUp, logIn }