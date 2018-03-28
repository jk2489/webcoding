var express = require('express');
var bodyParse = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 3000);;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/public', static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(expressSession({
    secret:'my key',
    resave:true,
    saveUninitialized:true
}));

var router = express.Router();

router.route('/process/login').post(function(req, res) {
    console.log('/process/login is called');
});

app.use('/', router);

var errorHandler = expressErrorHandler({
    static: {
        '404': './public/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

var MongoClient = require('mongodb').MongoClient;
var database;

function connectDB() {
    var databaseUrl = 'mongodb://localhost:27017/local';

    MongoClient.connect(databaseUrl, function(err, db) {
        if(err) throw err;
        console.log('Database is connected: ' + databaseUrl);
        database = db;
    });
}

var authUser = function(database, id, password, callback) {
    console.log('authUser is called');

    var users = database.collection('users');
    users.find({"id":id, "password":password}).toArray(function(err, docs) {
        if(err) {
            callback(err, null);
            return;
        }
        if(docs.length > 0) {
            console.log('ID [%s], Password [%s] are same', id, password);
            callback(null, docs);
        }
        else {
            console.log('No found');
            callback(null, null);
        }
    });
}

http.createServer(app).listen(app.get('port'), function() {
    console.log('Server has started in port: ' + app.get('port'));
    connectDB();
});

app.post('/process/login', function(req, res) {
    console.log('/process/login is called');

    var paramId = req.param('id');
    var paramPassword = req.param('password');

    if(database) {
        authUser(database, paramId, paramPassword, function(err, docs) {
            if(err) { throw err };

            if(docs) {
                console.dir(docs);
                var username = docs[0].name;
                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                res.write('<h1>Login successful</h1>');
                res.write('<div><p>ID: ' + paramId + '</p>/</div>');
                res.write('<div><p>Password: ' + paramPassword + '</p>/</div>');
                res.write("<br><br><a href='/public/login.html'>Retry to login</a>");
                res.end();
            }
            else {
                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                res.write('<h1>Login Failed</h1>');
                res.write("<br><br><a href='/public/login.html'>Retry to login</a>");
                res.end();
            }
        });
    }
    else {
        res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
        res.write('Database connection is failed');
        res.end();
    }
});