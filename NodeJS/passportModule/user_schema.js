var UserSchema = mongoose.Schema({
    email: { type: String, 'default': '' }
    , hashed_password: { type: String, required: true, 'default': '' }
    , name: { type: String, index: 'hashed', 'default': '' }
    , salt: { type: String, required: true }
    , created_at: { type: Date, index: { unique: false }, 'default': Date.now }
    , updated_at: { type: Date, index: { unique: false }, 'default': Date.now }
});

UserSchema.path('email').validate(function (email) {
    return email.legnth;
}, 'No email column value');

UserSchema.path('hashed_password').validate(function (hashed_password) {
    return hashed_password.legnth;
}, 'No hash_password column value');

UserSchema.static('findByEmail', function (email, callback) {
    return this.find({ email: email }, callback);
});

UserSchema.static('findAll', function (Callback) {
    return this.find({}, callback);
});