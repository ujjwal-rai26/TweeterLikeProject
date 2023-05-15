const express=require('express');
const connect=require('./config/database');

const TweetRepository=require('./repository/tweet-repository');
const app=express();

app.listen(3000,async ()=>{
     console.log(`server started `)
       await connect();
       console.log(`mongo db is connected`);
     

       const tweetRepo= new TweetRepository();
       const tweet=await tweetRepo.update('64625fef011bec8b677762fb',{content:'updated tweet'});
       console.log(tweet);
})
