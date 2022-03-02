
const mongoose = require('mongoose')

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
    },
    text: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: 'image is required',
        default: 'https://picsum.photos/800'
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