import mongoose from "mongoose";

const likeSchema =new mongoose.Schema({
    onModel:{
        type:String,
        required:true,
        enum:['Tweet','Comment']
    },
    likeable:{
        type:mongoose.Schema.Types.ObjectId,  //iska type id h
        required:true,
        refPath:'onModel'  // yeh id apn onModel se lenge (refPath ka use aise hota h)
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},{timestamps:true});

const Like=mongoose.model('Like',likeSchema);

export default Like;