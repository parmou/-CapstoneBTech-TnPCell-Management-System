module.exports = function(app) {
    
    app.get('/student/profile', (req,res) => {
        res.send('success');
    })
}