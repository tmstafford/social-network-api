const { Schema, model, Types } = require('mongoose');
const Thought = require('./Thought');
const moment = require('moment');

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
        required: true,
        validate: {
            validator: function(userEmail) {
                return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(userEmail);
            },
            message: props => `${props.value} is not a valid email address! Try again`
        }
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
        virtuals: true,
        getters: true
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