const CompanyPreference = require('../../models/student/companyPreferences');
const User =require('../../models/User.js');
module.exports = function(app) {
    
    app.get('/student/registration', (req,res) => {
        res.send('success');
    })

    app.post('/student/registration/company-preference', (req,res) => {
        /* Add code here for company preference */
        var company1 = req.body.instituteName1 + "/" + req.body.instituteAddress1;
        var company2 = req.body.instituteName2 + "/" + req.body.instituteAddress2;
        var company3 = req.body.instituteName3 + "/" + req.body.instituteAddress3;
        /* store these vars in your database*/
        var preference = new CompanyPreference({
            preference1: company1,
            preference2: company2,
            preference3: company3
        })
        preference.save().then(function(err){
            if(err){
                res.send('database-error')
            }
            else {
                res.send(student);
            }
        })
        res.send('success');
    })
}