import CommentRepository from "../repository/comment-repository.js";

import TweetRepository from "../repository/tweet-repository.js";

class CommentService{

    constructor(){
        this.commentRepository=new CommentRepository();
        this.tweetRepository =new TweetRepository();
    }

    async create(modelId,modelType,userId,content){

        if(modelType=='Tweet'){      //if model is tweet commentable will store tweet
            var commentable= await this.tweetRepository.get(modelId);   
        }
        else if(modelType=='Comment'){     //if model is comment commentable will store tweet
            var commentable= await this.commentRepository.get(modelId);
        }
        else{
           throw new Error('unknow model type');
        }

        const comment=await this.commentRepository.create({   //this will create commet 
            content:content,
            userId:userId,                          //this function also return you the comment
            onModel:modelType,
            commentable:modelId,
            comments:[]
           
        })

        commentable.comments.push(comment);   //we will add this comment in commentable(either tweet or comment)
        await commentable.save();

        return comment;    //will return the comment
       
    }

}

export default CommentService;