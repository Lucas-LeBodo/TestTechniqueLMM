const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const { PORT } = require('./config.json');
const { scandirImg } = require("./function/scandir");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) { 
    res.setHeader('Access-Control-Allow-Origin', "*")
    next();
})

app.get('/:id', (req, res) => {
    scandirImg.then((imgArray) =>{
        if(imgArray.includes(req.params.id)){
            res.sendFile(`${__dirname}/./asset/${req.params.id}.png`);
        } else { 
            res.send('404 not found')
        }
    })  
    
})

app.listen(PORT || 8000, () => {
  console.log(`Server start on http://localhost:${PORT}`)
})