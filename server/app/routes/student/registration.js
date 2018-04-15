const CompanyPreference = require('../../models/student/companyPreferences');
const TrainingDetails = require('../../models/student/trainingDetails');
const User =require('../../models/User.js');
module.exports = function(app) {
    
    app.get('/student/registration', (req,res) => {
        res.send('success');
    })

    app.post('/student/registration/company-preference', (req,res) => {
        /* Add code here for company preference */
     
        var data = [];
        var field1 = "" + req.body[0];
        var field2 = "" + req.body[1];
        var field3 = "" + req.body[2];

        data.push(field1);
        data.push(field2);
        data.push(field3);

        var preference = new TrainingDetails({
            comanyPreference : data,
            approvalStatus : ["hcvjc"],
            companyResponse : ["hcbjsbhcj"]
        })
        preference.save().then(function(err){
            if(err){
                res.send('database-error')
            }
            else {
                res.send(preference);
            }
        })
        res.send('success');
    })
}