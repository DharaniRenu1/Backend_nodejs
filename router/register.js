var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var router = express.Router()
var register = require('../modals/register_model')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

router.get('/Getrec',(req,res)=>{
    var email = req.body.emailid;
    console.log("Email"+ email)
    register.find({emailid:email}).then(c=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(c);
    }).catch(err=>{
        console.log(err)
    })
})

router.post('/regis',(req,res)=>{
    var email = req.body.emailid;
    var name = req.body.name;
    var password = req.body.password;

    var record = new register({
        emailid:email,
        name:name,
        password:password,
        
    })
    record.save().then(create=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json('Record Registered successfully')
        console.log(create);
    }).catch(err=>{
        res.statusCode = 403;
        res.statusCode('Content-Type','application/json');
        res.json(err)
    })
})
router.put('/reg_update',(req,res)=>{
    var email = req.body.emailid;
    var name = req.body.name;
    var password = req.body.password;
    
    register.findOneAndUpdate({emailid:email},{$set:{
        password:password,
        name:name
    }}).then(update=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json("Updated Successfully")
        console.log(update)
    }).catch(err=>{
        res.statusCode = 403;
        res.setHeader('Content-Type','application/json');
        res.json(err)
    })
})

module.exports = router;  