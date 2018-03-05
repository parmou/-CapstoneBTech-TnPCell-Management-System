module.exports = function(app) {
    
    app.get('/coordinator/event', (req,res) => {
        res.send('success');
    })
}