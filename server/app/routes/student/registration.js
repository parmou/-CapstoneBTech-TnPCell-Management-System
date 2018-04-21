const trainingDetails = require('../../models/student/trainingDetails');
const User =require('../../models/User.js');
module.exports = function(app) {
    
    app.get('/student/registration', (req,res) => {
        res.send('success');
    })

    app.post('/student/registration/company-preference', (req,res) => {
        /* Add code here for company preference */

        User.findOne({rollno : req.body[3]})
            .populate('_training')
            .exec(function(err, details) {
                if(err) res.send(err)
                    var array = [];

                    array.push(req.body[0]);
                    array.push(req.body[1]);
                    array.push(req.body[2]);
                    console.log(array);
                    console.log(details);

                trainingDetails.findOneAndUpdate({_id : details._training._id},{$set : {companyPreference : array}}, (err, training) => {
                    if (err) res.send(err);
                    training.companyPreference = array;
                })

                details._training.companyPreference = array;

                res.send(details);
            })

            
        
    })

    app.post('/student/registration/company-response', (req,res) => {
        console.log(req.body);
        User.findOne({rollno : req.body[5]}, (err, user) => {
            if(err) res.send(err);

            else {
                trainingDetails.findOneAndUpdate({_id : user._training}, {$set : {companyResponse : req.body}}, (err, details) => {
                if(err) res.send(err);

                else {
                        res.send('successful');
                    }
                })
            }

            
        })
    })
}