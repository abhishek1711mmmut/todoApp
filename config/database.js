const mongoose=require('mongoose');

// to access DATABASE_URL from .env file, we have to install npm i dotenv

require('dotenv').config();  // this command will load the env data into the process object so that we can fetch from process object
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log('DB ka connection is successfull'))
    .catch((error)=>{
        console.log('Issue in DB connection');
        console.error(error.message);
        // hw
        process.exit(1);
    });
}

module.exports=dbConnect;