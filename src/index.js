import express from'express';

import bodyParser from 'body-parser';

import  {connect} from './config/database.js';

import apiRoutes from './routes/index.js';

const app=express();

import UserRepository from './repository/user-repository.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiRoutes);



app.listen(3000,async ()=>{
     console.log(`server started `)
       await connect();
       console.log(`mongo db is connected`);    

      //  const userRepo=new UserRepository();
      //  const user= userRepo.create({
      //   email:'ujj@g.com',
      //   password:'12345',
      //   name:'sanket'
      //  })

})
