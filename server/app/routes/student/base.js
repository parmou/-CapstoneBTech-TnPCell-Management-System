module.exports = function(app) {
    
    app.get('/student/home', (req,res) => {
        res.send('success');
    })
}