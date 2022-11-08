const mongoose = require('mongoose');
const mongoURL ='mongodb+srv://cinereview:cinereview@cluster0.h4kib3s.mongodb.net/test';

const connectToMongo=()=>{
    mongoose.connect(mongoURL,()=>{
        console.log('connected to Mongo successfully');
    });
};

module.exports = connectToMongo;