const fs = require('fs');

const scandirImg = new Promise((resolve, reject) => { 
        let imgArray = [];
        fs.readdir(__dirname + '/../asset/', (err, files) => {
            if (err)
                console.log(err);
            else
                files.forEach(file => {
                    let filename = file.split('.png');
                    imgArray.push(filename[0]);
                    
                })
                imgArray.sort(function(a, b){
                    return a - b;
                })
                resolve(imgArray)
        })
})



module.exports = {
    scandirImg
}