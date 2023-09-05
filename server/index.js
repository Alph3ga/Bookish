var express= require('express');
var fs= require('fs').promises;
var apiK= require('./src/controllers/bookApi');
var cors= require('cors');

const router= require('./src/router')

var app= express();
const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8080;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/', router);
app.use(express.static('res'));

app.get('/search', (req, res)=>{
    console.log(req.query.search_text);
    var imurl;
    apiK.getVolumesInfo(req.query.search_text).then(books=> imurl=(books[0].volumeInfo.imageLinks.thumbnail));
});

app.listen(PORT, HOST, ()=>{
    console.log("Server is up and listening at Port: %d on Host: %s", PORT, HOST);
});

