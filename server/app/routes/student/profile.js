const StudentPersonalDetails = require('../../models/student/personalDetails');
const User = require('../../models/User');
module.exports = function(app) {
    
    app.get('/student/profile', (req,res) => {
        res.send('success');
    })

    app.post('/student/home', (req,res) => {
        console.log(req.body);

        User.findOne({rollno : req.body[0]}, (err, user) => {
            
            if(err) res.send(err);
            else {
                console.log(user);
                StudentPersonalDetails.findOne({_creator : user._id} )
                .populate('_training')
                .populate('_creator')
                .exec(function(err,detail) {
                if (err) res.send(err);
                console.log(detail);
                res.send(detail);
            })
            }
        })

        
    })
}