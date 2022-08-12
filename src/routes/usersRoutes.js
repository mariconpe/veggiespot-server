import express from "express";
import ProdutoController from "../controllers/usersController.js";

const router = express.Router();

router
    .get("/users", ProdutoController.listarProdutos)
    .post("/users", ProdutoController.adicionarProdutos)
    .put("/users/{id}", ProdutoController.atualizarProduto)
    .delete("/users/{id}", ProdutoController.deletarProduto)

export default router;