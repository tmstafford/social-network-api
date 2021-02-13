const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
        trim: true
    },
    username: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        defualt: Date.now,
        get: value => moment(value).format("MM-DD-YYYY hh:mm a")
    }
},
{
    toJSON: {
        getters: true
    },
    id: false
});

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        defualt: Date.now,
        get: value => moment(value).format("MM-DD-YYYY hh:mm a")
    },
    username: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    reactions: [ReactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

// virtual reactionCount get length of the thought's reactions array on query
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;