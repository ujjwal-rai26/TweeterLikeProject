import Tweet from '../models/tweet.js';

class TweetRepository{

    async create(data){
        try {
           const tweet=await  Tweet.create(data);
           return tweet;
        } 
        catch (error) {
            console.log('error in repo');
        }
    }
    async get(id){
        try {
           const tweet=await  Tweet.findById(id);
           return tweet;
        } 
        catch (error) {
            console.log('error in repo');
        }
    }
    async getWithComments(id){
        try {
           const tweet=await  Tweet.findById(id).populate({path:'comments'}).lean();
           return tweet;
        } 
        catch (error) {
            console.log('error in repo');
        }
    }

    async destroy(id){
        try {
           const tweet=await  Tweet.findByIdAndRemove(id);
           return tweet;
        } 
        catch (error) {
            console.log('error in repo');
        }
    }

    async getAll(offset,limit){  //pagination 
        try {
           const tweet=await  Tweet.find().skip(offset).limit(limit);
           return tweet;
        } 
        catch (error) {
            console.log('error in repo');
        }
    }
    
     
}

export default TweetRepository;