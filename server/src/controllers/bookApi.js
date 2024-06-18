const axios= require('axios')
const apiKey= process.env.API_KEY;

const getURL= 'https://www.googleapis.com/books/v1/volumes?q=';

const getVolumeJSON= (name)=> axios.get(getURL+
    encodeURIComponent(name)+
    "&key="+
    apiKey);

exports.getVolumesInfo= (name)=> {
    return getVolumeJSON(name).then(
    res=> res.data).then(
        json=> {
            if(json.totalItems>7){
                var books=json.items.slice(0,7).map(
                    (volume)=>{
                        return {
                            "title": volume.volumeInfo.title,
                            "authors": volume.volumeInfo.authors,
                            "description": volume.volumeInfo.description,
                            "saleability": volume.saleInfo.saleability,
                            "price": volume.saleInfo.listPrice? volume.saleInfo.listPrice.amount : null,
                            "image": volume.volumeInfo.imageLinks.thumbnail,
                            "link": volume.volumeInfo.canonicalVolumeLink
                        }
                    }
                );
            }
            else{
                var books= json.items;
            }
            return books;
        }
    )};
