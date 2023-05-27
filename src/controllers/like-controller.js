import LikeService from "../services/like-service.js";

const likeService=new LikeService();

export const toggleLike=async (req,res)=>{
    try {
        const response=await likeService.toggleLike(req.query.modelId,req.query.modelType,req.body.user);
        return res.status(201).json({
           success:true,
           message:'successfully toggle like',
           data:response,
           err:{} 
        })
    } 
    catch (error) {
        return res.status(500).json({
            success:false,
            message:'something went wrong',
            data:{},
            err:error 
         })
    }
}