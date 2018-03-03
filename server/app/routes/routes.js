module.exports = function(app) {
    

    /* GET api listing. */
    app.get('/', (req, res) => {
        res.send('api works');
    });

    /* Different routes exported here */ 
    require('./student/base')(app);
    
    /*require('./coordinator/base')(app);
    require('./company/base')(app);*/


    // Catch all other routes and return the index file
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname,'../../', 'dist/index.html'));
    });
  
    
}