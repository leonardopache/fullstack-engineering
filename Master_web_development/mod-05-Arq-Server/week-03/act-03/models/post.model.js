const mongoose = require('mongoose')

const MIN_LENGTH_PATTERN = /^.{5,}$/

const schema = new mongoose.Schema({
    id: {
        type: String
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    },
    title: {
        type: String,
        required: 'at least 5 char',
        match: MIN_LENGTH_PATTERN
    },
    text: {
        type: String,
        required: true,
        match: MIN_LENGTH_PATTERN
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret.__v;
            delete ret._id;
            return ret;
        }
    }
});

module.exports = mongoose.model('Post', schema)