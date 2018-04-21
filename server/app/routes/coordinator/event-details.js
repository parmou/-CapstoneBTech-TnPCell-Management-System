const TrainingDetails = require('../../models/student/trainingDetails');
const StudentPersonalDetails = require('../../models/student/personalDetails');
const User = require('../../models/User');
const EventDetails = require('../../models/coordinator/eventDetails');

module.exports = function(app) {

    app.get('/coordinator/dashboard/event', (req,res) => {
        EventDetails.find({}, (err,events) => {
                    if(err) res.send(err);
                    else {
                        console.log(events);
                        res.send(events);
                    }
                })
    })

    app.post('/coordinator/dashboard/event', (req,res) => {
        let event = new EventDetails({
            name : req.body[0],
            year: req.body[1],
            branch: req.body[2],
            fields: req.body[3]
            
        })

        event.save((err)=> {
            if(err) {
                res.send(err)
            }
            else {
                res.send(event);
            }
            
        })
           
            
                    

        
    })

   }