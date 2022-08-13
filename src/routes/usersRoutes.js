import express from "express";
import UserController from "../controllers/usersController.js";

const users = express.Router();

users
    .get("/users", UserController.listarUsers)
    .get("/users/:id", UserController.listarUserporId)
    .post("/users", UserController.adicionarUsers)
    .put("/users/:id", UserController.atualizarUser)
    .delete("/users/:id", UserController.deletarUser)

export default users;