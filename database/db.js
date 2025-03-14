const mongoose = require('mongoose');

exports.connect = async() =>{
    try{
        const MONGO_URI = "mongodb+srv://Aquilav:200577021@lab3.sctjr.mongodb.net/";
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("404 MongoDB connection error:", err));
        

        connection.once('open',()=>{
            console.log('Succesfully connected to DB');
        });
        
    }
    catch(error){
        console.log("connection failed");
        console.error(error);
       
    }
};