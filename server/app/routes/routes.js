module.exports = function(app) {
    

    /* GET api listing. */
    app.get('/', (req, res) => {
        res.send('api works');
    });

    /* Different routes exported here */ 
    
    require('./student/base')(app);
    require('./student/profile')(app);
    require('./student/registration')(app);
    require('./student/settings')(app);
    require('./student/training')(app);
    require('./coordinator/base')(app);
    require('./company/base')(app);
    require('./company/register')(app);
    require('./coordinator/student-training-details')(app);

    // Catch all other routes and return the index file
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname,'../../', 'dist/index.html'));
    });
  
    
}

