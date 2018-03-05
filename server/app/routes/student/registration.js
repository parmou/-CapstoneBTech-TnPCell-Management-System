module.exports = function(app) {
    
    app.get('/student/registration', (req,res) => {
        res.send('success');
    })
}