import users from '../models/User.js';

class UserController{

    static listarUsers = (req, res) => {
        users.find((err, users) => {
            res.status(200).json(users)
        });
    }

    static listarUserporId = (req, res) =>{
        const id = req.params.id;
        users.findById(id, (err, users) => {
            if (!err){
                res.status(200).send(users)
            }
            else res.status(400).send({message: `${err.message} - ID do user não localizada`})
        })
    }

    static adicionarUsers = (req, res) => {
        let user = new users(req.body)
        user.save((err) => {
            if (err) {
                res.status(500).json({message: `${err.message} - falha ao cadastrar user`})
            }
            else res.status(201).json(user.toJSON())
        })
    }
    
    static atualizarUser= (req, res) => {
        const id = req.params.id

        users.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if(!err){
                res.status(200).send({message: 'Produto atualizado com sucesso!'})
            }
            else res.status(500).send({message: err.message})
        })
    }

    static deletarUser = (req, res) => {
        const id = req.params.id

        users.findByIdAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({message: 'Produto deletado com sucesso!'})
            }
            else res.status(500).send({message: err.message})
        })
    }
}

export default UserController;