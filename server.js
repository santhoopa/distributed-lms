var express=require("express");
var app=express();

app.get("/test",function(req,res){
	var sql = require("mssql");

    // config for your database
    var config = {
        user: 'testuser',
        password: 'test@123',
        server: 'lms-sql-server.database.windows.net', 
        database: 'lms-primary-db' 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('SELECT TOP (1000) * FROM [dbo].[InsertDemo]', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset.recordset);
            
        });
    });
		
});

app.get("/hello",function(req,res){
    res.send("Hello bro");
});



app.listen(3000,function(){
 	console.log("Cricket Info Server has started...");
 });
