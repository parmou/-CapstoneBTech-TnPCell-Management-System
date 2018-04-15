const trainingDetails = require('../../models/student/trainingDetails');
const User =require('../../models/User.js');
module.exports = function(app) {
    
    app.get('/student/registration', (req,res) => {
        res.send('success');
    })

    app.post('/student/registration/company-preference', (req,res) => {
        console.log(req.body);
        /* Add code here for company preference */
        var details = new trainingDetails({
            companyPreference: req.body
        })
        details.save().then(function(err){
            if(err){
                res.send('db-error');
            }
            else{
                res.send(details);
            }
        })
        res.send('success');
    })
}