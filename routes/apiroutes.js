// Bringing model
const db = require('../models/workout.js')
// routes
module.exports = (app)=>{
    app.post('/api/workouts', ({body}, res)=>{
            var exercises = [
                {
                day : Date.now(),
               exercises :[ 
                {
                type : body.type,
                name: body.name,
                distance: body.distance,
                duration : body.duration,
                weight : body.weight,
                sets : body.sets,
                reps : body.reps
                }
                ]
            } 
        ] 
            db.Workouts.create(exercises)
            .then((dbWorkout)=>{
                res.json(dbWorkout);        
            })    
    })

    app.get('/api/workouts', (req, res)=>{
        db.Workouts.find({}).then((dbWorkouts)=>{
            //console.log(dbWorkouts);
            res.json(dbWorkouts);
    });
    })
    app.get('/api/workouts/range', (req, res)=>{
        db.Workouts.find({}).then((dbWorkouts)=>{
            //console.log(dbWorkouts);
            res.json(dbWorkouts);
        })
    })
// update route but it is adding extra fields as a exercises to the exsisting workout. 
    app.put('/api/workouts/:id', (req, res)=>{
        // console.log(req.params.id);
        db.Workouts.updateOne({ _id: req.params.id },{$push: { exercises: req.body }} , function(err,result){
            if (err) {
              res.send(err);
            } else {
                console.log(result)
              res.send(result);
            }
        });
    })


}
