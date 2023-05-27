import mongoose from 'mongoose';

const commentSchema=new  mongoose.Schema({
    content:{
        type:String,
        required:true
    },

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    onModel:{
        type:String,
        required:true,
        enum:['Tweet','Comment']
    },
    commentable:{
        type:mongoose.Schema.Types.ObjectId,  //iska type id h
        required:true,
        refPath:'onModel'  // yeh id apn onModel se lenge (refPath ka use aise hota h)
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ] 

},{timestamps:true})
const Comment=mongoose.model('Comment',commentSchema);
export default Comment;