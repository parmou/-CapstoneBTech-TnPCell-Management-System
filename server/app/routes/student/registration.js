const User =require('../../models/User.js');
module.exports = function(app) {
    
    app.get('/student/registration', (req,res) => {
        res.send('success');
    })

    app.post('/student/registration', (req,res) => {
        var char = new User({
            name: req.headers.name,
            
            rollno: req.headers.rollno,
            isAdmin: req.headers.isAdmin,
            email: req.headers.email,
            
        });
        char.save(function(err,char){
            if(err){
                console.log(err);
            }
            else{
                res.send(char);
            }
        });
    })
}