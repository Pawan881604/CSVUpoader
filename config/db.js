const mongoose = require('mongoose');

const dbConnect = ()=>{
    mongoose.connect(process.env.DB, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log('db Connect'))
    .catch((err)=>{
        console.log(err)
    })
}
module.exports = dbConnect;