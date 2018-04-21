const Event = require('../../models/coordinator/eventDetails');

module.exports = function(app) {
    
    app.get('/coordinator', (req,res) => {
        res.send('success');
    })

   
}