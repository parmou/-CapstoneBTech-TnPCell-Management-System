const trainingDetails = require('../../models/student/trainingDetails');
const User =require('../../models/User.js');

module.exports = function(app) {
    
    app.get('/student/training', (req,res) => {
        res.send('success');
    })

    app.post('/student/training', (req, res) => {
        console.log(req.body);
        User.findOne({rollno : req.body[0]}, (err, user) => {
            if(err) res.send(err);

            else {
                trainingDetails.findOne({_id : user._training}, (err, details) => {
                if(err) res.send(err);

                else {
                        console.log('\n'+'Here are the details \n'+details);
                        res.send(details);
                    }
                })
            }

            
        })
    })
}