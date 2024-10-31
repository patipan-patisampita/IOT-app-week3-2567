import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    token: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    }]
})

const User = mongoose.deleteModel('User', userSchema)
export default User