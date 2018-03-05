module.exports = function(app) {
    
    app.get('/company/home', (req,res) => {
        res.send('success');
    })

    app.get('/company/register', (req,res) => {
        res.send('success');
    })
}