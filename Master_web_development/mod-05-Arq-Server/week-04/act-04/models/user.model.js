const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const MIN_LENGTH_PATTERN = /^.{5,}$/
const PASSWORD_PATTERN = /^.{8,}$/;
const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new mongoose.Schema({
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    },
    name: {
        type: String,
        required: 'A name is required',
        match: [MIN_LENGTH_PATTERN, 'name should have at least 5 char']
    },
    email: {
        type: String,
        required: 'An email is required',
        match: [EMAIL_PATTERN, 'email not valid']
    },
    password: {
        type: String,
        required: 'A password is required',
        match: [PASSWORD_PATTERN, 'password should have at least 8 char']
    },
    bio: {
        type: String
    },
    active: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            ret.id = doc._id;
            delete ret.__v;
            delete ret._id;
            delete ret.password;
            return ret;
        }
    },
    toObject: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;
            return ret
        }
    }
});

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.hash(this.password, 10)
            .then((hash) => {
                this.password = hash;
                next();
            })
            .catch(err => next(err));
    } else {
        next();
    }
});

userSchema.methods.checkPassword = function (passwordToCheck) {
    return bcrypt.compare(passwordToCheck, this.password);
};

module.exports = mongoose.model('User', userSchema)