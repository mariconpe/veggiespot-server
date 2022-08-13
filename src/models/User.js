import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    [{
        id: {type: String},
        firstname: {type: String, required: true},
        lastname: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        cep: {type: String, required: true},
        adress: {type: String, required: true}
    }]
);

const users = mongoose.model('users', userSchema);

export default users;