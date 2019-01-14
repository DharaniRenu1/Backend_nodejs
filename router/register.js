var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var router = express.Router()
var register = require('../modals/register_model')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

router.get('/Getrec',(req,res)=>{
    console.log("hai")
    // var email = req.body.emailid;
    // console.log("Email"+ email)
    // register.find({emailid:email}).then(c=>{
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type','application/json');
    //     res.json(c);
    // }).catch(err=>{
    //     console.log(err)
    // })
})
module.exports = router;