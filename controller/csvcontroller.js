const csvModel = require("../models/csvModel");

exports.CSVCont = async(req,res)=>{
    try{
        // call csv data from database
        const CSV = await csvModel.findById(req.params.id)
        //render ejs file and send csv data 
        res.render('csv',{CSV});
    }
    catch(err){
        console.log(err)
    }
}