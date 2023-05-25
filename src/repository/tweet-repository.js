import Tweet from '../models/tweet.js';
import CrudRepository from './crud-repository.js';

class TweetRepository extends CrudRepository{

    constructor(){
        super(Tweet);  //calling the crud constructor
    }

    async create(data){
        try {
           const tweet=await  Tweet.create(data);
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