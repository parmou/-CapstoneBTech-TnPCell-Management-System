module.exports = function(app) {
    
    app.get('/student/home', (req,res) => {
        res.send('success');
    })

    app.get('/student/profile', (req,res) => {
        res.send('success');
    })

    app.get('/student/registration', (req,res) => {
        res.send('success');
    })

    app.get('/student/taining', (req,res) => {
        res.send('success');
    })

    app.get('/student/setting', (req,res) => {
        res.send('success');
    })
}