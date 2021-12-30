const mongoose = require('mongoose')
const { Schema } = mongoose
 var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = mm+'-'+dd+'-'+yyyy; 
const noticeSchema = new Schema({

    txt: {
        type: String,
        required: true
        // unique: true
    },
    Date: {
        type: String,
        default: today
    }
})


module.exports = mongoose.model('Notices',noticeSchema)