const { Admins } = require('../models/admins');

let auth = (req,res,next) =>{
    let token = req.cookies.w_auth;

    Admins.findByToken(token, (err,user)=>{
        if(err) throw err;
        if(!user) return res.json({
            isAuth: false,
            error: true
        })

        req.token = token;
        req.user = user;
        next();
    })
}



module.exports = { auth };
