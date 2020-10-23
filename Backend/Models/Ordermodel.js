const mongoose = require('mongoose');

const OrderSchema =mongoose.Schema ({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },

     orderItems:[
         {
           name:{type:String,required:true},
           qty:{type:Number,required:true},
           image:{type:String,required:true},
           price:{type:Number,required:true},
           products:{

             type:mongoose.Schema.Types.ObjectId,
             required:true,
             ref:'Product'

           }

         }


     ],

     shippingAddress:{

        address:{type:String,required:true},
        city:{type:String,requirerd:true},
        postalCode:{type:String,required:true},
        country:{type:String,required:true}
     },

     paymentMethods:{
         type:String,
         required:true
     },
     paymentResults:{
        id:{type:String},
        status:{type:String},
        update_time:{type:String},
        email_address:{type:String}
    },
    taxPrice:{
        type:Number,
        default:0.0,
        required:true
    },
    shippingPrice:{
        type:String,
        required:true,
        default:0.0
    },
    totalPrice:{
        type:Number,
        required:true,
        default:0.0
    },

    isPaid:{
        type:Boolean,
        required:true,
        default:false
    },
    paidAt:{
        type:Date
    },
    isDelievered:{
        type:Boolean,
        required:true,
        default:false
    },
    deliverAt:{
        type:Date
    },
},{
    timestamp:true
})



const Order = mongoose.model('Order',OrderSchema);


module.exports = Order;

