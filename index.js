require('dotenv').config()
const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.send('Hello, World!');
});

app.get('/twitter',(req,res)=>{
    res.send("<h1>hi pranay</h1>")
})

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 3000');
});