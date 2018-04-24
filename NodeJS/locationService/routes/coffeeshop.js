var add=function(req, res) {
    console.log('add is called in coffeeshop module');

    var paramName = req.body.name || req.query.name;
    var paramAddress = req.body.address || req.query.address;
    var paramTel = requ.body.tel || req.query.tel;
    var paramLongitude = req.body.longitude || req.query.longitude;
    var paramLatitude = req.body.latitude || req.query.latitude;

    console.log('requested parameter: ' + paramName + ', ' + paramAddress + ', ' + paramTel + ', ' + paramLongitude + ', ' + paramLatitude);

    var database = req.app.get('database');

    if(database.db) {
        addCoffeeShop(database, paramName, paramAddress, paramTel, paramLongitude, paramLatitude, function(err, result) {
            if(err) {
                console.error('coffeeshop adding error: ' + err.stack);
                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                res.write('<h2>coffeeshop adding error</h2>');
                res.write('<p>' + err.stack + '</p>');
                res.end();
                return;
            }

            if(result) {
                console.dir(result);
                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                res.write('<h2>coffeeshop adding successful</h2>');
                res.end();
            }
            else {
                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                res.write('<h2>coffeeshop adding failed</h2>');
                res.end();
            }
        });
    }
    else { 
        res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
        res.write('<h2>database connection failed</h2>');
        res.end();
    }
};

module.exports.add = add;

var addCoffeeShop=function(database, name, address, tel, longitude, latitude, callback) {
    console.log('addCoffeeShop is called');

    var coffeeshop = new database.CoffeeShopModel(
        {name:name,address:address,tel:tel,geometry:{type:'Point',coordinates:[longitude,latitude]}}
    );

    coffeeshop.save(function(err) {
        if(err) {
            callback(err, null);
            return;
        }
        console.log('coffeeshop data added');
        callback(null, coffeeshop);
    });
};

var list=function(req, res) {
    console.log('list is called in coffeshop module');

    var database = req.app.get('database');

    if(database.db) {
        database.CoffeeShopModel.findAll(function(err, results) {
            if(err) {
                console.err('coffeeshop list error: ' + err.stack);
                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                res.write('<h2>coffeeshop list error</h2>');
                res.write('<p>' + err.stack + '</p>');
                res.end();
                return;
            }

            if(results) {
                console.dir(results);
                res.writehead('200', {'Content-Type':'text/html;charset=utf8'});
                res.write('<h2>Coffeeshop List</h2>');
                res.write('<div><ul>');

                for(var i = 0; i < results; i++) {
                    var curName = results[i]._doc.name;
                    var curAddress = results[i]._doc.address;
                    var curTel = results[i]._doc.tel;
                    var curLongitude = results[i]._doc.geometry.coordinates[0];
                    var curLatitude = results[i]._doc.geometry.coordinates[1];

                    res.write('     <li>#' + i + ': ' + curName + ', ' + curAddress + ', ' + curTel + ', ' + curLongitude + ', ' + curLatitude + '</li>');
                }

                res.write('</ul></div>');
                res.end();
            }
        });
    }
    else {
        res.writehead('200', {'Content-Type':'text/html;charset=utf8'});
        res.write('<h2>Coffeeshop list failed</h2>');
        res.end();
    }
};

module.exports.list = list;

var findNear = function(req, res) {
    console.log('findNear is called in coffeeshop module');

    var maxDistance = 1000;
    var paramLongitude = req.body.longitude || req.query.longitude;
    var paramLatitude = req.body.latitude || req.query.latitude;

    console.log('requested parameter: ' + paramLongitude + ', ' + paramLatitude);

    var database = req.app.get('database');

    if(database.db) {
        database.CoffeeShopModel.findNear(paramLongitude, paramLatitude, maxDistance, function(err, results) {
            if(err) {
                console.err('error occurred while searching for coffeshop: ' + err.stack);
                res.writeHead('200', {'Content-Type':'text/html;charset=utf-8'});
                res.write('<h2>error occurred while searching for coffeeshop</h2>');
                res.write('<p>' + err.stack + '</p>');
                res.end();
            }

            if(results) {
                console.dir(results);
                res.writehead('200', {'Content-Type':'text/html;charset=utf8'});
                res.write('<h2>Coffeeshop List</h2>');
                res.write('<div><ul>');

                for(var i = 0; i < results; i++) {
                    var curName = results[i]._doc.name;
                    var curAddress = results[i]._doc.address;
                    var curTel = results[i]._doc.tel;
                    var curLongitude = results[i]._doc.geometry.coordinates[0];
                    var curLatitude = results[i]._doc.geometry.coordinates[1];

                    res.write('     <li>#' + i + ': ' + curName + ', ' + curAddress + ', ' + curTel + ', ' + curLongitude + ', ' + curLatitude + '</li>');
                }

                res.write('</ul></div>');
                res.end();
            }
        });
    }
    else {
        res.writehead('200', {'Content-Type':'text/html;charset=utf8'});
        res.write('<h2>database connection failed</h2>');
        res.end();
    }
}

module.exports.findNear = findNear;