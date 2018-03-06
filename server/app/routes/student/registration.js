const Student =require('../models/student');
module.exports = function(app) {
    
    app.get('/student/registration', (req,res) => {
        res.send('success');
    })

    app.post('/student/registration', (req,res) => {
        var char = new Student({
            name: req.headers.name,
            age: req.headers.age,
            rollno: req.headers.rollno,
            contact: req.headers.contact,
            email: req.headers.email,
            fathersName: req.headers.fathersname,
            mothersName: req.headers.mothersname,
            address: req.headers.address,
            dob: req.headers.dob,
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