var Schema = {};

Schema.createSchema = function(mongoose) {
    var CoffeeShopSchema = mongoose.Schema({
        name:{type:String,index:'hashed','default':''},
        address:{type:String,'default':''},
        tel:{type:String,'default':''},
        geometry:{
            'type':{type:String,'default':"Point"},
            coordinates:[{type:"Number"}]
        },
        created_at:{type:Date,index:{unique:false},'default':Date.now},
        updated_at:{type:Date,index:{unique:false},'default':Date.now}
    });
}

CoffeeShopSchema.index({geometry:'2dsphere'});

CoffeeShopSchema.static('findAll', function(callback) {
    return this.find({}, callback);
});

CoffeeShopSchema.static('findNear', function(longitude, latitude, maxDistance, callback) {
    console.log('findNear is called in CoffeeShopSchema');

    this.find().where('geometry').near(
        {center:{type:'Point',coordinates:[parseFloat(longitude), parseFloat(latitude)]},
        maxDistance:maxDistance
    }).limit(1).exec(callback);
});

CoffeeShopSchema.static('findWithin', function(topleft_longitude, topleft_latitude, bottomright_longitude, bottomright_latitude, callback) {
    console.log('findWithin is called in CoffeeShopSchema');

    this.find().where('geometry').within(
      {box:[[parseFloat(topleft_longitude), parseFloat(topleft_latitude)],[parsefloat(bottomright_longitude), parseFloat(bottomright_latitude)]]  
    }).exec(callback);
});