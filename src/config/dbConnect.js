import mongoose from "mongoose";

mongoose.connect("mongodb+srv://mariconpe:aPyeubdiitQYWBdq@produtos.d0ea4jy.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;
