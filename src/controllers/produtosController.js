import produtos from '../models/Produto.js';

class ProdutoController{

    static listarProdutos = (req, res) => {
        produtos.find((err, produtos) => {
            res.status(200).json(produtos)
        })
    }

    static listarProdutosporId = (req, res) => {
        const id = req.params.id

        produtos.findById(id, (err, produtos) => {
            if (!err) {
                res.status(200).send(produtos)
            }
            else res.status(500).send({message: err.message})
        })
    }

    static adicionarProdutos = (req, res) => {
        let produto = new produtos(req.body)
        produto.save((err) => {
            if (err) {
                res.status(500).json({message: `${err.message} - falha ao cadastrar produto`})
            }
            else res.status(201).json(produto.toJSON())
        })
    }
    
    static atualizarProduto = (req, res) => {
        const id = req.params.id

        produtos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err){
                res.status(200).send({message: 'Produto atualizado com sucesso!'})
            }
            else res.status(500).send({message: err.message})
        })
    }

    static deletarProduto = (req, res) => {
        const id = req.params.id

        produtos.findByIdAndDelete(id, (err) =>{
            if (!err){
                res.status(200).send({message:'Produto deletado com sucesso!'})
            }
            else res.status(500).send({message: err.message})
        })
    }
}

export default ProdutoController;