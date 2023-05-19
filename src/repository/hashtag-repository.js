import Hashtag from '../models/hashtags.js';


class HashtagRepository{

    async create(data){
        try {
           const tag=await  Hashtag.create(data);
           return tag;
        } 
        catch (error) {
            console.log('error in repo');
        }
    }

    async bulkCreate(data){
        try {
           const tags=await  Hashtag.insertMany(data);
           return tags;
        } 
        catch (error) {
            console.log('error in repo');
        }
    }

    async get(id){
        try {
           const tag=await  Hashtag.findById(id);
           return tag;
        } 
        catch (error) {
            console.log('error in repo');
        }
    }
   

    async destroy(id){
        try {
           const response=await  Hashtag.findByIdAndRemove(id);
           return response;
        } 
        catch (error) {
            console.log('error in repo');
        }
    }

    async findByName(titleList){
        try {
           const tags=await  Hashtag.find({
            title:titleList
           });
           return tags;
        } 
        catch (error) {
            console.log('error in repo');
        }
    }


     
}

export default HashtagRepository;