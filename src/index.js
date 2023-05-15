const express=require('express');
const connect=require('./config/database');

const TweetRepository=require('./repository/tweet-repository');
const Comment=require('./models/comment');
const app=express();

app.listen(3000,async ()=>{
     console.log(`server started `)
       await connect();
       console.log(`mongo db is connected`);
     

       const tweetRepo= new TweetRepository();
       const tweet=await tweetRepo.getWithComments('646276cf37688ea2b24da7d5');
     
       console.log(tweet);
})
