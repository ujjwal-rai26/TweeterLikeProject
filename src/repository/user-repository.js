import User from '../models/user.js';
import CrudRepository from './crud-repository.js';

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }


    // async create(data){
    //     try {
    //        const user=await  User.create(data);
    //        console.log(user,'repo');
    //        return user;
    //     } 
    //     catch (error) {
    //         console.log('error in repo');
    //         throw error;
    //     }
    // }

    async findBy(data){
        try {
            const response = await User.findOne(data);
            return response;
        }
         catch (error) {
            throw error;
        }
    }

}

export default UserRepository;