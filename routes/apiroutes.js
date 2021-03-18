//const Cardio = require('../models/Workout');
//const Resistance = require('../models/resistance');
const { Resistance, Cardio } = require('../models/workout.js');
const db = require('../models/workout.js')
// routes
module.exports = (app)=>{
    app.post('/api/workouts', ({body}, res)=>{
        console.log(body); 
        if (body.type === "cardio") {
            db.Cardio.create(body).then((dbWorkout)=>{
                res.json(dbWorkout);
                    
                })   
        }
        
       else if (body.type === "resistance") {
            db.Resistance.create(body).then((dbWorkout)=>{
             res.json(dbWorkout)
         })   
        }
       
    })

    app.get('/api/workouts', (req, res)=>{
        db.Resistance.find({}).then((exercises)=>{
            console.log(exercises);
            res.json(exercises);
        })
    })
}