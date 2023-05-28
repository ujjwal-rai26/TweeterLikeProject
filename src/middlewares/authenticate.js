import passport from "passport";

export const authenticate=(req,res,next)=>{   //this will check wheather user is authenticated or not
   
    passport.authenticate('jwt',(err,user)=>{
        if(err) next(err);

        if(!user){
            return res.status(401).json({
                message:'unauthorised access'
            })
        }

        req.user=user;  //we are adding a new field in req => we can access user from req.user
        next();
    })(req,res,next)

}