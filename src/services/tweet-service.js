import {TweetRepository,HashtagRepository} from '../repository/index.js';

class TweetService{
    constructor(){
        this.tweetRepository=new TweetRepository();
        this.hashtagRepository=new HashtagRepository();
    }

    async create(data){
        const content=data.content;
        const tags=content.match(/#[a-zA-Z0-9_]+/g)
        .map((tag)=>tag.substring(1))
        .map(tag=>tag.toLowerCase());  //this regex extract hashtag

        const tweet=await this.tweetRepository.create(data);
        let alreadyPresentTags=await this.hashtagRepository.findByName(tags); //this will give full object of tweet which include tweet id ,content etc
        let titleOfPresentTags=alreadyPresentTags.map(tags =>tags.title); //we only want tweet title so we did this,return only titles
        let newTags=tags.filter(tag =>!titleOfPresentTags.includes(tag));  //them we filter out which is not already exist

        newTags=newTags.map(tag =>{    //here we made object with title and tweet id (this need to be created(new hashtags))
            return {title:tag,tweets:[tweet.id]}
        });

        await this.hashtagRepository.bulkCreate(newTags);  //here we created new tags 

        alreadyPresentTags.forEach((tag)=>{  // here we added the tweet id to the existing tweet as they need to add this tweet as well
            tag.tweets.push(tweet.id);
            tag.save();
        });

        return tweet;  

    }
}


export default  TweetService;