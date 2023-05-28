import CommentService from "../services/comment-service.js";


const commentService=new CommentService();

export const createComment=async (req,res)=>{
    try {
        const response=await commentService.create(req.query.modelId,req.query.modelType,req.user.id,req.body.content);  //now we dont need 
        return res.status(201).json({                             //to send the userId ,we will take it from auth inside barrere token 
           success:true,                                          //only those user can comment which are autherized
           message:'successfully created a  new comment',
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