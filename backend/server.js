const express = require('express');
const app = express();
const connectDb = require('./config/db');


connectDb();

app.get('/',(req,res)  =>{
    res.send("Hello");
})


app.use('/api/users',require('./routes/api/users'));
const PORT = process.env.PORT || 5000;


app.listen(PORT,() => {
    console.log('Server Started ')
});
