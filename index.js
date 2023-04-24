var express= require('express');
var fs= require('fs').promises;
var apiK= require('./bookApi');
const fetch= require('node-fetch');

var app= express();
const host = '0.0.0.0';
const port = 3000;

const initialRequestListener= (req,res)=>{
    res.sendFile(__dirname+ '/res/html/index.html');
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.get('/', initialRequestListener);
app.use(express.static('res'));

app.get('/search', (req, res)=>{
    console.log(req.query.search_text);
    var imurl;
    apiK.getVolumesInfo(req.query.search_text).then(books=> imurl=(books[0].volumeInfo.imageLinks.thumbnail));
});

app.listen(port, host);

