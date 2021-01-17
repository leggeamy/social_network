const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            // must match a valid email address >> Mongoose matching validation << 
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
        //prevents virtuals from creating duplicate of _id as `id`
        id: false
    }
);

//get total count of user's friends on retrieval
UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce(
        (total, friends) => total + friends.length + 1,
        0
    );
});

const User = model('User', UserSchema);

module.exports = User;