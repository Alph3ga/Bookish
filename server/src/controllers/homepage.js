const path= require('path')

const homePage= (req,res)=>{
    res.sendFile(path.join(__dirname, '../../res/html/index.html'));
};

module.exports= homePage;