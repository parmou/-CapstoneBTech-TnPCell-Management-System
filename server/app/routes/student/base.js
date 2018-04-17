var user = require('../../models/User');
const PersonalDetails = require('../../models/student/personalDetails');
const TrainingDetails = require('../../models/student/trainingDetails');

module.exports = function(app) {
    
    var sess;
    app.get('/student/home', (req,res) => {
        res.send('success');
    });

    app.post('/student/signup', (req,res) => {

        const trainingDetails = new TrainingDetails({

        });

        var student = new user({
            name: req.body.name,
            rollno: req.body.rollno,
            password: req.body.password,
            isCoordinator: false,
            _training: trainingDetails._id
        })
        student.save().then(function(err){
            if(err){
                res.send('database-error')
            }
            

            trainingDetails.save().then(function(err){
                if (err) res.send(err);
            })
                var personalDetails = new PersonalDetails({
                    /* Make user enter his branch and year at the start */
                    year: "1",
                    branch: "CSE",
                    _creator : student._id,
                    _training : trainingDetails._id
                })

                

                personalDetails.save().then(function(err) {
                    if(err) res.send(err);
                    res.send(student);
                })
                
            
        })
        
    })

    app.post('/student/login', (req,res) => {
        user.findOne({rollno: req.body.rollno}, (err,result) => {
            
            if(err) {
                res.send(err);
            }
            else if(result) {
                if (result.password === req.body.password){
                   // console.log('here'+sess.rollno);
                    
                    res.send(result);
                }
            }
            else {
                console.log('not here')
                res.send('wrong credentials');
            }
        })
    })
    
}