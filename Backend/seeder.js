const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./Data/User');
const products = require('./Data/Data');
const User = require('./Models/Usermodel');
const Product = require('./Models/Productmodel');
const Order = require('./Models/Ordermodel');

const connectDB = require('./Config/db');



dotenv.config();

connectDB();

const importData = async() =>{

    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

       const createdUser = await User.insertMany(users)


       const adminUser = createdUser[0]._id


       const sampleProducts = products.map(product => {

        return{...product, User:adminUser}
       })

          await Product.insertMany(sampleProducts)

          console.log('Data Imported')

          process.exit()

    }

    catch(error){

        console.log(error.message,'pr')
        process.exit(1)



    }




}


const DestroyData = async() =>{

    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

 
          console.log('Data destroyed')

          process.exit()

    }

    catch(error){

        console.log(error)
        process.exit(1)



    }




}

if(process.argv[2]  === '-d'){

    DestroyData()
}
else{
    importData()
}

