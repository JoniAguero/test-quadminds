"use strict"
const UserAuth = (req, res) => {

    res.status(200).json({
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role
    })
}

module.exports = {
    UserAuth
}
    
