const Event = require('../../models/coordinator/eventDetails');

module.exports = function(app) {
    
    app.get('/coordinator', (req,res) => {
        res.send('success');
    })

    /* Adding event start */

    app.post('/coordinator/event', (req,res) => {

        const event = new Event({
            
            fields: req.body.details
        })

        event.save((err,data) => {
            if(err) 
            res.send('error');
            else {
                res.send('done');
            }
        })
    })

    /* Adding Event finish */
}