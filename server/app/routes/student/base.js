var user = require('../../models/User');

module.exports = function(app) {
    
    var sess;
    app.get('/student/home', (req,res) => {
        sess = req.session;
        sess.rollno;
        sess.name;
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
                console.log(err);
            }
        })
        res.send('success');
    })

    app.post('/student/login', (req,res) => {
        user.findOne({rollno: req.body.rollno}, (err,result) => {
            sess = req.session;
            sess.rollno = req.body.rollno;
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