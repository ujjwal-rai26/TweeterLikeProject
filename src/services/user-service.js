import { UserRepository } from "../repository/index.js";

class UserService{
    constructor() {
        this.userRepository=  new UserRepository()
    }

  async signup(data){
      try {
        const user= await this.userRepository.create(data);
        console.log(user,'servive');
        return user;
      } 
      catch (error) {
        throw error;
      }
  } 

  async getUserByEmail(email){
    try {
        const user=await this.userRepository.findBy({email});
        return user;
    }
     catch (error) {
        throw error;
    }
  }


  async signin(data){
    try {
        const user=await this.getUserByEmail(data.email);

        if(!user){               //if user dont exist
              throw {
                message:'no user found ' 
            };
        }

        if(!user.comparePassowrd(data.password)){   //will check password here
               throw {
                message:'incorrect password '
            };
        }
        const token =user.genJWT();    //will generate the jwt token
        return token
    } 
    catch (error) {
        throw error
    }
  }

}

export default UserService;