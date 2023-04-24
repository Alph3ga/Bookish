var express= require('express');
var fs= require('fs').promises;
var apiK= require('./bookApi');

var app= express();
const host = '0.0.0.0';
const port = 3000;

const initialRequestListener= (req,res)=>{
    fs.readFile(__dirname + "/res/html/index.html").then(
        content=> {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(content);
        }
    ).catch(err=>{
        res.writeHead(500);
        res.end(err);
        return;
    })
};

app.get('/', initialRequestListener);
app.use(express.static('res'));
app.listen(port, host);

apiK.getVolumesInfo('percy jackson').then(books=> console.log(books[0].volumeInfo.imageLinks));