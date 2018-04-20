const StudentPersonalDetails = require('../../models/student/personalDetails');
const User = require('../../models/User');
module.exports = function(app) {
    
    app.get('/student/profile', (req,res) => {
        res.send('success');
    })

    app.post('/student/home', (req,res) => {
        
        User.findOne({rollno : req.body[0]}, (err,user) => {
            if(err) res.send(err);
            else {
                res.send(user);
            }
        })

       

        
    })

    app.post('/student/edit-user-basic-details', (req, res) => {
        console.log(req.body);
        User.findOneAndUpdate({rollno : req.body[1]},{$set : {name : req.body[0].name}}, (err, user) => {
            
            if(err) res.send(err);
            else {
                StudentPersonalDetails.findOneAndUpdate({_creator : user._id}, {$set: {branch: req.body[0].branch, year: req.body[0].year}}, (err, details) => {
                    if(err) {
                        res.send(err);
                    }
                    else {
                        
                        res.send(details);
                    }
                })
            
            }
        })
    })

    app.post('/student/edit-user-personal-details', (req, res) => {
        console.log(req.body);
        User.findOne({rollno : req.body[2]}, (err, user) => {
            
            if(err) res.send(err);
            else {
                StudentPersonalDetails.findOneAndUpdate({_creator : user._id}, {$set: {cgpa: req.body[0], resume: req.body[1]}}, (err, details) => {
                    if(err) {
                        res.send(err);
                    }
                    else {
                        
                        res.send(details);
                    }
                })
            
            }
        })
    })

    app.post('/student/edit-user-password', (req, res) => {
        console.log(req.body);
        User.findOne({rollno : req.body[1]}, (err, user) => {
            
            if(err) res.send(err);
            else {
                if(user.password == req.body[0].old) {
                    User.findOneAndUpdate({rollno : req.body[1]}, {$set: {password: req.body[0].new_again}},(err, details) => {
                        if(err) res.send(err);
                        else {
                            res.send(details);
                        }
                    })
                }
            
            }
        })
    })
}