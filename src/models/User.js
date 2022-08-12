import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        senha: {type: String, required: true}
    }
);

const users = mongoose.model('users', userSchema);

export default users;