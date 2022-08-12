import express from "express";
import ProdutoController from "../controllers/produtosController.js";

const router = express.Router();

router
    .get("/produtos", ProdutoController.listarProdutos)
    .post("/produtos", ProdutoController.adicionarProdutos)
    .put("/produtos/{id}", ProdutoController.atualizarProduto)
    .delete("/produtos/{id}", ProdutoController.deletarProduto)

export default router;