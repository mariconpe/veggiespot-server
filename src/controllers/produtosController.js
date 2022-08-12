import produtos from '../models/Produto.js';

class ProdutoController{

    static listarProdutos = (req, res) => {
        produtos.find((err, produtos) => {
            res.status(200).json(produtos)
        })
    }

    static adicionarProdutos = (req, res) => {
        produtos.push(req.body);
        res.status(201).send('Produto cadastrado com sucesso');
    }
    
    static atualizarProduto = (req, res) => {
        let index = (produtos.findIndex(produto => produto.id == req.params.id));
        produtos[index].id = req.body.id;
        produtos[index].categoria = req.body.categoria;
        produtos[index].nome = req.body.nome;
        produtos[index].valor = req.body.valor;
        produtos[index].estoque = req.body.estoque;
        res.status(200).json(produtos);    
    }

    static deletarProduto = (req, res) => {
        let index = (produtos.findIndex(produto => produto.id == req.params.id));
        let nome = produtos[index].nome;   
        produtos.pop(produtos[index]);
        res.status(200).json(`Produto ${nome} deletado com sucesso`);    
    }
}

export default ProdutoController;