import express from "express";
import ProdutoController from "../controllers/produtosController.js";

const produtos = express.Router();

produtos
    .get("/produtos", ProdutoController.listarProdutos)
    .get("/produtos/:id", ProdutoController.listarProdutosporId)
    .post("/produtos", ProdutoController.adicionarProdutos)
    .put("/produtos/:id", ProdutoController.atualizarProduto)
    .delete("/produtos/:id", ProdutoController.deletarProduto)

export default produtos;