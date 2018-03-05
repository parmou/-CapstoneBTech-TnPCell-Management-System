module.exports = function(app) {
    
    app.get('/student/settings', (req,res) => {
        res.send('success');
    })
}