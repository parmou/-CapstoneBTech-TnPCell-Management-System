const TrainingDetails = require('../../models/student/trainingDetails');
const StudentPersonalDetails = require('../../models/student/personalDetails');
const User = require('../../models/User');

module.exports = function(app) {
    app.post('/coordinator/dashboard/get-student-details', (req,res) => {
        
        StudentPersonalDetails.find({year : req.body.year, branch : req.body.branch})
            .populate('_training')
            .populate('_creator')
            .exec(function(err,details) {
                if (err) res.send(err);
                console.log(details);
                res.send(details);
            })
        
    })

    app.post('/coordinator/dashboard/change-status', (req,res) => {
        User.findOneAndUpdate({rollno: req.body[1]}, {$set : {isCoordinator : req.body[0]}}, (err, details) => {
            if(err) res.send(err);
            console.log('reached here')
             StudentPersonalDetails.findOne({_creator : details._id} )
            .populate('_training')
            .populate('_creator')
            .exec(function(err,detail) {
                if (err) res.send(err);
                console.log(detail);
                res.send(detail);
            })
        })
    })


    app.post('/coordinator/dashboard/approve-company', (req,res) => {
        
        
        TrainingDetails.findOneAndUpdate({_id : req.body[2]}, {$set : {approvalStatus : req.body[0]}}, (err, details) => {
            if(err) res.send(err);

            StudentPersonalDetails.findOne({_creator : req.body[1]} )
            .populate('_training')
            .populate('_creator')
            .exec(function(err,detail) {
                if (err) res.send(err);
                console.log(detail);
                res.send(detail);
            })
        })
    })

    app.post('/coordinator/dashboard/delete-user', (req,res) => {
        console.log('reached here')
        TrainingDetails.findByIdAndRemove(req.body[1], (err) => {
            if(err) res.send(err);
            else {
                User.findByIdAndRemove(req.body[0], (err) => {
                if(err) res.send(err);
                else {
                    StudentPersonalDetails.findByIdAndRemove(req.body[2], (err) => {
                    if(err) res.send(err);
                    StudentPersonalDetails.find({})
                    .populate('_training')
                    .populate('_creator')
                    .exec(function(err,detail) {
                        if (err) res.send(err);
                        console.log(detail);
                        res.send(detail);
                    })
                })
                }
                
            })
            }
            
        })
    })
}