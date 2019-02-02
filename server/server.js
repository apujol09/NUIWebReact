const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const mongoose = require("mongoose");
require('dotenv').config();

mongoose.Promise = global.Promise;    
mongoose.connect(process.env.DATABASE)

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

// Models
const { Members } = require('./models/members');
const { Affiliated } = require('./models/affiliated');
const { Former } = require('./models/former');
const { Admins } = require('./models/admins');
const { FacultyPHD } = require('./models/facultyPHD');
const { FacultyCSU } = require('./models/facultyCSU');
const { FacultyFIU } = require('./models/facultyFIU');


//Middlewares
const { auth } = require('./middleware/auth');
const { admin } = require('./middleware/admin');


//=========================================
//                MEMBERS
//=========================================

app.post('/api/members',auth,admin,(req,res)=>{
    const members = new Members(req.body);

    members.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            members: doc
        })
    })
})


app.get('/api/members',(req,res)=>{
    Members.find({},(err,members)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(members);
    })
})


//=========================================
//                AFFILIATED
//=========================================

app.post('/api/affiliated',auth,admin,(req,res)=>{
    const affiliated = new Affiliated(req.body);

    affiliated.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            affiliated: doc
        })
    })
})


app.get('/api/affiliated',(req,res)=>{
    Affiliated.find({},(err,affiliated)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(affiliated);
    })
})

//=========================================
//                FORMER
//=========================================

app.post('/api/former',auth,admin,(req,res)=>{
    const former = new Former(req.body);

    former.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            former: doc
        })
    })
})


app.get('/api/former',(req,res)=>{
    Former.find({},(err,former)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(former);
    })
})


//=========================================
//              FACULTY PHD
//=========================================

app.post('/api/facultyPHD',auth,admin,(req,res)=>{
    const facultyPHD = new FacultyPHD(req.body);

    facultyPHD.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            facultyPHD: doc
        })
    })
})


app.get('/api/facultyPHD',(req,res)=>{
    FacultyPHD.find({},(err,faculty)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(faculty);
    })
})


//=========================================
//              FACULTY CSU
//=========================================

app.post('/api/facultyCSU',auth,admin,(req,res)=>{
    const facultyCSU = new FacultyCSU(req.body);

    facultyCSU.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            facultyCSU: doc
        })
    })
})


app.get('/api/facultyCSU',(req,res)=>{
    FacultyCSU.find({},(err,faculty)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(faculty);
    })
})



//=========================================
//              FACULTY FIU
//=========================================

app.post('/api/facultyFIU',auth,admin,(req,res)=>{
    const facultyFIU = new FacultyFIU(req.body);

    facultyFIU.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            facultyFIU: doc
        })
    })
})


app.get('/api/facultyFIU',(req,res)=>{
    FacultyFIU.find({},(err,faculty)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(faculty);
    })
})


//=========================================
//                  ADMINS
//=========================================

app.post('/api/admin',auth,admin,(req,res)=>{
    
    const admins = new Admins(req.body);

    admins.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success: true,
            admin: doc
        })
    })
});

//=========================================
//                  USERS
//=========================================


app.get('/api/users/auth', auth, (req,res)=>{

    res.status(200).json({
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        cart: req.user.cart,
        history: req.user.history

    })

})

app.post('/api/users/register',(req,res)=>{
    const user = new User(req.body);

    user.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success: true,
            userdata: doc
        })
    })

})

app.post('/api/users/login',(req,res)=>{

    User.findOne({'email':req.body.email},(err,user)=>{
        if(!user) return res.json({loginSuccess:false, message:'Auth failed, email not found'})

        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({loginSuccess:false, message:'Wrong Password'})

            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);
                res.cookie('w_auth', user.token).status(200).json({
                    loginSuccess: true
                })
            })
        })
    })
})


app.get('/api/users/logout',auth,(req,res)=>{

    User.findOneAndUpdate(
        { _id:req.user._id },
        { token: '' },
        (err,doc)=>{
            if(err) return res.json({success:false,err});
            return res.status(200).send({
                success: true
            })
        }
    )
})

const port = process.env.PORT || 3002; 

app.listen(port, () => {
    console.log(`Server Running on port: ${port}`);
  });