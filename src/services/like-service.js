import { LikeRepository,TweetRepository } from "../repository/index.js";
import Tweet from "../models/tweet.js";

class LikeService{
    constructor(){
        this.likeRepository=new LikeRepository();
        this.tweetRepository =new TweetRepository();  //as also require tweet repo here
    }

      async toggleLike(modelId,modelType,userId){  

           if(modelType=='Tweet'){
            var likeable=await this.tweetRepository.find(modelId); //if its tweet ,we will get tweet in likeable  
            console.log(likeable);
           }
           else if(modelType=='Comment'){
            //todo
           }
           else{
            throw new Error('unknow model type');
           }
         
           const exists=await  this.likeRepository.findByUserAndLikeable({  //here we will check that given tweet or comment is already liked or not
            user:userId,                          //this function also return you the like
            onModel:modelType,
            likeable:modelId
           });

           if(exists){                  //it means its already like   
            likeable.likes.pull(exists.id);    //we will remove the like from the tweet or comment 
            await likeable.save();
  
          //  await exists.remove();     //then we will remove the like also from the Like  //check why this remove is not working

            await  this.likeRepository.destroy(exists.id);  //then we will destroy the like 

           console.log("exist is",exists);
           var isAdded =false;   
           }
           else{

              const newLike=await this.likeRepository.create({  //it means it do not exist so we create a like
                user:userId,
                onModel:modelType,
                likeable:modelId
              });

                console.log(newLike);

              likeable.likes.push(newLike);   //we will add this like in likeable (either tweet or comment)
              await likeable.save();              
              var isAdded =true;    
           }
              
           return isAdded;
      }

}

export default LikeService;