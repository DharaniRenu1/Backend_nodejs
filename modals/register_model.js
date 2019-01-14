var mongoose = require('mongoose')
var schema = mongoose.Schema;

var RegSchema = new schema({
    emailid :{
        type: String,
        required:true,
        unique: true
    },
    name : {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

var Regis = mongoose.model('RegRecord',RegSchema);

module.exports = Regis;