const { Schema, model, Types } = require('mongoose');
const Thought = require('./Thought');

// schema for user data
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
});

// virtual friendCount retirves length of users friends array field on query
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// create the model using the schema
const User = model('User', UserSchema);

module.exports = User;