var express= require('express');
var pg = require('pg');
var app = express();
var bodyParser = require('body-parser');

//make pg connection
var connection = process.env.DATABASE_URL || 'postgres://postgres:123@localhost:5432/Phoenix_ERP';

const client = new pg.Client(connection);


client.connect(function(error){
    if(!!error){
        console.log('error');
    }else{
        console.log('connected');
    }
});




// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.json());









//get data from item table
app.get('/PoItems',function(req,resp){
    //about mysql
    client.query("select * from purchesing_order", function(error, rows, fields){
        //callback
         if(!!error){
             console.log('error in the quary');
         }else{
             //phase the database
             console.log('sucsessfull log to quary \n ');
              console.log(rows);
              resp.send(rows.rows);
         }
    });
});


app.get('/product',function(req,resp){
    //about mysql
    client.query("select * from product", function(error, rows, fields){
        //callback
         if(!!error){
             console.log('error in the quary');
         }else{
             //phase the database
             console.log('sucsessfull log to quary \n ');
              console.log(rows);
              resp.send(rows.rows);
         }
    });
});

app.post('/item', function (req, resp) {
        var post=req.body;
        console.log(post);
        client.query("INSERT INTO product VALUES ('"+post.productid+"','"+post.productname+"','"+post.producttype+"','"+post.internalreferance+"','"+post.barcode+"','"+post.inventorypolicy+"','"+post.sellingprice+"','"+post.cost+"','"+post.reorderlevel+"','"+post.warrenty+"','"+post.vat+"')",function(error) {
            if (error) {
                console.log(error.message);
            } else {
                console.log('success');
            }
        
    });
    });



app.listen(3000);