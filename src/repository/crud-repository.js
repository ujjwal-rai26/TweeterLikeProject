
class CrudRepository{
   
    constructor(model) {
        this.model = model;
      }
    
      async create(data) {
        try {
          const response = await this.model.create(data);    
          return response;
        } catch (error) {
            console.log('error in crud repo');
          throw error;
        }
      }



    async get(id){
        try {
           const result=await  this.model.findById(id);
           return result;
        } 
        catch (error) {
            console.log('error crud in repo');
            throw error;
        }
    }

    async getAll(){  
        try {
           const result=await  this.model.find({});
           return result;
        } 
        catch (error) {
            console.log('error in  crud repo');
            throw error;
        }
    }

    async destroy(id){
        try {
           const result=await  this.model.findByIdAndDelete(id);
           return result;
        } 
        catch (error) {
            console.log('error in  crud repo');
            throw error;
        }
    }

     async update(id,data){
        try {
           const result=await  this.model.findByIdAndUpdate(id,data,{new :true});  //this new=>true will give you upadte data 
           return result;
        } 
        catch (error) {
            console.log('error in  crud repo');
            throw error;
        }
    }
    
     
}

export default CrudRepository;