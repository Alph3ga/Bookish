const fetch= require('node-fetch');
const apiKey= process.env.API_KEY;

const getURL= 'https://www.googleapis.com/books/v1/volumes?q=';

const getVolumeJSON= (name)=> fetch(getURL+
    encodeURIComponent(name)+
    "&key="+
    apiKey);

exports.getVolumesInfo= (name)=> {
    return getVolumeJSON(name).then(
    res=> res.json()).then(
        json=> {
            if(json.totalItems>5){
                var books=[json.items[0],
                json.items[1],
                json.items[2],
                json.items[3],
                json.items[4]]
            }
            else{
                var books= json.items;
            }
            return books;
        }
    )};

exports.scrapeInfo= (url)=> fetch(url);