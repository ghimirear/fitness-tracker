const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Workouts = new Schema(

  {
    day : Date,
    default: Date,

    exercises: [
      {
      
      type: {
         type:  String,
        },
      
       name:{
         type:  String,
        },

        distance:{
         type:  Number,
        },
   
        weight: {
        type : Number,
        },

        sets: {
        type : Number,
        trim : true,
        },
  
        reps: {
        type : Number,
        trim : true,
        },

        duration: {
        type: Number,
        },

        weight: {
        type : Number,
        trim : true,
        },

        sets: {
        type : Number,
        trim : true,
        },
 
      reps: {
        type : Number,
        trim : true,
        }
    
  
    
      }
]}
);
// const Resistance = new Schema({
  
//     type: {
//       type : String,
//       trim : true,
//     },
//     day: {
//       type: Date,
//       default: Date.now(),
//     },
//     name: {
//       type : String,
//       trim : true,
//     },
//     weight: {
//       type : Number,
//       trim : true,
//     },
//     sets: {
//       type : Number,
//       trim : true,
//     },
//     reps: {
//       type : Number,
//       trim : true,
//     },
//     duration: {
//       type : Number,
//       trim : true,
//     }

  
// });

// const cardio = mongoose.model("Workouts", Cardio);
//  const resistance = mongoose.model("Workouts", Resistance);
// var users = mongoose.model('User', loginUserSchema, 'users');
// var registerUser = mongoose.model('Registered', registerUserSchema, 'users');

// var cardio = mongoose.model('Cardio', Cardio, 'Workouts');
// var resistance = mongoose.model('Resistance', Resistance, 'Workouts');


// const Workouts = {
//   Resistance : resistance,
//   Cardio : cardio
 
// };
// module.exports = Workouts;
var workouts = mongoose.model('Workouts', Workouts);
module.exports = {Workouts: workouts};