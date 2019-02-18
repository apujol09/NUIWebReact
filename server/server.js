const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');

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
const { Publications } = require('./models/publications');
const { Projects } = require('./models/projects');
const { Teaching } = require('./models/teaching');
const { Events } = require('./models/events');
const { Images } = require('./models/images');


//Middlewares
const { auth } = require('./middleware/auth');



//=========================================
//                IMAGES
//=========================================

app.post('/api/images',auth,(req,res)=>{
    const images = new Images(req.body);

    images.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            images: doc
        })
    })
})

app.get('/api/images',(req,res)=>{
    Images.find({},(err,members)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(members);
    })
})

//=========================================
//                MEMBERS
//=========================================

app.post('/api/members',auth,(req,res)=>{
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

app.put('/api/members/:id',auth,(req,res)=>{
    Members.findOneAndUpdate({_id: req.params.id}, req.body, {new:true},(err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            members: doc
        })
    })
})


//=========================================
//                AFFILIATED
//=========================================

app.post('/api/affiliated',(req,res)=>{
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

app.put('/api/affiliated/:id',auth,(req,res)=>{
    Affiliated.findOneAndUpdate({_id: req.params.id}, req.body, {new:true},(err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            affiliated: doc
        })
    })
})

//=========================================
//                FORMER
//=========================================

app.post('/api/former',auth,(req,res)=>{
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

app.put('/api/former/:id',auth,(req,res)=>{
    Former.findOneAndUpdate({_id: req.params.id}, req.body, {new:true},(err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            former: doc
        })
    })
})

//=========================================
//              FACULTY PHD
//=========================================

app.post('/api/facultyPHD',auth,(req,res)=>{
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

app.put('/api/facultyPHD/:id',auth,(req,res)=>{
    facultyPHD.findOneAndUpdate({_id: req.params.id}, req.body, {new:true},(err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            facultyPHD: doc
        })
    })
})

//=========================================
//              FACULTY CSU
//=========================================

app.post('/api/facultyCSU',auth,(req,res)=>{
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

app.put('/api/facultyCSU/:id',auth,(req,res)=>{
    FacultyCSU.findOneAndUpdate({_id: req.params.id}, req.body, {new:true},(err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            facultyCSU: doc
        })
    })
})

//=========================================
//              FACULTY FIU
//=========================================

app.post('/api/facultyFIU',auth,(req,res)=>{
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

app.put('/api/facultyFIU/:id',auth,(req,res)=>{
    FacultyFIU.findOneAndUpdate({_id: req.params.id}, req.body, {new:true},(err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            facultyFIU: doc
        })
    })
})

//=========================================
//                PROJECTS
//=========================================

app.post('/api/projects',auth,(req,res)=>{
    const projects = new Projects(req.body);

    projects.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            projects: doc
        })
    })
})

app.get('/api/projects',(req,res)=>{
    Projects.find({},(err,projects)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(projects);
    })
})

app.get('/api/projects/:id',(req,res)=>{
    Projects.findOne({_id: req.params.id},(err,projects)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(projects);
    })
})

app.put('/api/projects/:id',auth,(req,res)=>{
    Projects.findOneAndUpdate({_id: req.params.id}, req.body, {new:true},(err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            projects: doc
        })
    })
})

//=========================================
//              PUBLICATIONS
//=========================================

app.post('/api/publications',auth,(req,res)=>{
    const publications = new Publications(req.body);

    publications.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            publications: doc
        })
    })
})


app.get('/api/publications',(req,res)=>{
    Publications.find({},(err,publications)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(publications);
    })
})

app.put('/api/publications/:id',auth,(req,res)=>{
    Publications.findOneAndUpdate({_id: req.params.id}, req.body, {new:true},(err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            publications: doc
        })
    })
})


//=========================================
//              TEACHING
//=========================================

app.post('/api/teaching',auth,(req,res)=>{
    const teaching = new Teaching(req.body);

    teaching.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            teaching: doc
        })
    })
})


app.get('/api/teaching',(req,res)=>{
    Teaching.find({},(err,teaching)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(teaching);
    })
})

app.put('/api/teaching/:id',auth,(req,res)=>{
    Teaching.findOneAndUpdate({_id: req.params.id}, req.body, {new:true},(err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            teaching: doc
        })
    })
})


//=========================================
//                EVENTS
//=========================================

app.post('/api/events',auth,(req,res)=>{
    const events = new Events(req.body);

    events.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            events: doc
        })
    })
})


app.get('/api/events',(req,res)=>{
    Events.find({},(err,events)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(events);
    })
})


//=========================================
//                  ADMINS
//=========================================

app.post('/api/admins',auth,(req,res)=>{
    
    const admins = new Admins(req.body);

    admins.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success: true,
            admin: doc
        })
    })
});

app.get('/api/auth', auth, (req,res)=>{

    res.status(200).json({
        isAuth: true
    })
})



app.post('/api/register',(req,res)=>{
    const admin = new Admins(req.body);

    admin.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success: true,
            admindata: doc
        })
    })
})


//=========================================
//            LOGIN AND LOGOUT
//=========================================


app.post('/api/login',(req,res)=>{

    Admins.findOne({'username':req.body.username},(err,admin)=>{
        if(!admin) return res.json({loginSuccess:false, message:'Auth failed, username not found'})

        admin.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({loginSuccess:false, message:'Wrong Password'})

            admin.generateToken((err,admin)=>{
                if(err) return res.status(400).send(err);
                res.cookie('w_auth', admin.token).status(200).json({
                    loginSuccess: true
                })
            })
        })
    })
})


app.get('/api/logout',auth,(req,res)=>{

    Admins.findOneAndUpdate(
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