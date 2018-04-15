var user = require('../../models/User');

module.exports = function(app) {
    
    app.get('/student/home', (req,res) => {
        res.send('success');
    });

    app.post('/student/signup', (req,res) => {
        console.log('dhruvam');
        var student = new user({
            name: req.body.name,
            rollno: req.body.rollno,
            password: req.body.password,
            isCoordinator: false
        })
        student.save().then(function(err){
            if(err){
                res.send('database-error')
            }
            else {
                res.send(student);
            }
        })
        res.send('error')
    })

    app.post('/student/login', (req,res) => {
        user.findOne({rollno: req.body.rollno}, (err,result) => {
            if(err) {
                res.send(err);
            }
            else if(result) {
                if (result.password === req.body.password)
                    
                    res.send(result);
            }
            else {
                console.log('not here')
                res.send('wrong credentials');
            }
        })
    })
    
}