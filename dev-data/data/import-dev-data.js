const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const Vehicle = require('./../../server/models/vehicleModel');

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true
  })
  .then(() => console.log('DB connection successful!'));

  const vehicles = JSON.parse(fs.readFileSync(`${__dirname}/cars-simple.json`, 'utf-8'));
 
  //IMPORT DATA into DB
  const importData = async ()=>{
      try{ 
          await Vehicle.create(vehicles)
          console.log('Data successfully Loaded');
      }catch(err){
            console.log(err);
      }
    process.exit();
}

  //DELETE DATA FROM db

  const deleteData = async ()=>{
       try{ 
          await Vehicle.deleteMany();
          console.log('Data successfully deleted');
          process.exit();
      }catch(err){
            console.log(err);
      }  
     process.exit();

  }

  if(process.argv[2]==='--import'){
      importData();
  }else if(process.argv[2]==='delete'){
      deleteData();
  }

  console.log(process.argv);
