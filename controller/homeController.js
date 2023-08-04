const csv = require('csv-parser')
const fs = require('fs');
const csvModel = require('../models/csvModel');

exports.home= async(req,res)=>{
    try{
      // find all csv data from database
        const CSV = await csvModel.find();
      // render ejs file and send sv data
        res.render('index',{CSV});
    }
    catch(err){
        console.log(err)
    }
}

exports.csvUplode = async (req,res)=>{
   
  try {

    if (!req.file) {
      // handle error if file not present
      return res.status(400).send('No files were uploaded.');
    }

    if (req.file.mimetype !== 'text/csv') {
      // handle error if file is not CSV
      return res.status(400).send('Only CSV files are allowed.');
    }
  
    //parser the uploaded csv file and store it in array
    const results = [];
    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on('data', (data) => {
        results.push(data);
      })
      .on('end', async () => {
        // stor csv data into databse
        const CSV = await csvModel.create({
          filename: req.file.originalname,
          header_row: results[0],
          data_rows: results.slice(1),
        })
        // after store data into database redirect into homepage
        return res.redirect('/');
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }

}