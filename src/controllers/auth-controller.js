import UserService from "../services/user-service.js";

const userService=new UserService();

export  const signup=async (req,res)=>{
    try {
        const response=await userService.signup({ 
            email:req.body.email,
            password: req.body.password,
            name: req.body.name
        
            });

            console.log(response,'controller');

        return res.status(201).json({
            data:response,
           success:true,
           message:'successfully created a  new user using auth controller', 
           err:{} 
        })
    } 
    catch (error) {
        return res.status(500).json({
            success:false,
            message:'something went wrong in user controller',
            data:{},
            err:error 
         })
    }
}


export const login =async (req,res)=>{
    try {
        const token=await userService.signin(req.body);
        console.log(token);

        return res.status(200).json({
            message:'successfully logged in ',
            success:true,
            data:token
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