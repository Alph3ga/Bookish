require('express')

const bookAPI= require('./bookApi.js');

const searchList= [
    'novel', 'biography', 'fantasy', 'mystery', 'thriller', 
    'romance', 'science', 'fiction', 'history', 'adventure', 
    'literature', 'classic', 'drama', 'poetry', 'comedy', 
    'horror', 'nonfiction', 'young', 'adult', 'children', 
    'crime', 'suspense', 'historical', 'autobiography', 'memoir', 
    'philosophy', 'psychology', 'self-help', 'guide', 'manual', 
    'reference', 'cookbook', 'travel', 'art', 'photography', 
    'religion', 'spirituality', 'health', 'fitness', 'politics', 
    'economics', 'business', 'management', 'leadership', 'education', 
    'science-fiction', 'technology', 'engineering', 'mathematics', 'environment', 
    'ecology', 'anthology', 'short', 'stories', 'essay', 
    'graphic', 'novel', 'comic', 'satire', 'dystopian', 
    'utopian', 'mythology', 'fairy', 'tale', 'folklore', 
    'legend', 'epic', 'adventure', 'fantasy', 'drama', 
    'romantic', 'war', 'peace', 'hero', 'villain', 
    'magic', 'wizard', 'witch', 'vampire', 'werewolf', 
    'zombie', 'alien', 'space', 'time', 'travel', 
    'future', 'past', 'present', 'detective', 'spy', 
    'espionage', 'heist', 'quest', 'journey', 'expedition', 
    'treasure', 'lost', 'found', 'redemption', 'betrayal', 
    'revenge', 'love', 'hate', 'friendship', 'family', 
    'destiny', 'fate', 'sacrifice', 'freedom', 'oppression', 
    'courage', 'fear', 'bravery', 'honor', 'duty', 
    'loyalty', 'justice', 'injustice', 'truth', 'lies', 
    'secrets', 'mysteries', 'puzzle', 'riddle', 'clues', 
    'adventure', 'exploration', 'discovery', 'innovation', 'invention', 
    'creation', 'destruction', 'survival', 'apocalypse', 'rebirth', 
    'transformation', 'growth', 'decay', 'healing', 'sickness', 
    'health', 'wellness', 'mind', 'body', 'soul', 
    'spirit', 'emotion', 'logic', 'reason', 'faith', 'belief', 'doubt',
]


const randomBook= async (req, res)=>{
    const keyword= searchList[Math.floor(Math.random()*searchList.length)];
    info= await bookAPI.getVolumesInfo(keyword);
    info= info[Math.floor(Math.random()*info.length)]
    res.json(info);
};

module.exports= randomBook;