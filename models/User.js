const { Schema, model } = require('mongoose');

// schema for user data
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }
    ],
    // friends: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'User'
    //     }
    // ]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
});

// virtual friendCount retirves length of users friends array field on query
// UserSchema.virtual('friendCount').get(function() {
//     return this.friends.length;
// });

// create the model using the schema
const User = model('User', UserSchema);

module.exports = User;