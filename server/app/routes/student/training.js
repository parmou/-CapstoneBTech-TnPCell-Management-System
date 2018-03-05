module.exports = function(app) {
    
    app.get('/student/training', (req,res) => {
        res.send('success');
    })
}