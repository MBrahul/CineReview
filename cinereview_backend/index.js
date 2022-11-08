const express = require('express');
const connectToMongo = require('./db')
var cors = require('cors')

const app = express();
const PORT = 5500;
connectToMongo();
app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.send('hello');
});



app.use('/api/auth',require('./routes/auth'));
app.use('/api/movies',require('./routes/movies'));

app.listen(PORT);