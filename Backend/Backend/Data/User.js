import bcrypt from 'bcryptjs';
const users = [

    {
        name:'Admin User',
        email:'adim@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    
    {
        name:'John Doe',
        email:'Johndoe@example.com',
        password:bcrypt.hashSync('123456',10),
    },
    
    {
        name:'Jane Doe',
        email:'adim@example.com',
        password:bcrypt.hashSync('123456',10),
    
    }




]


module.exports = users