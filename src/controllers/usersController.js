import users from '../models/User.js';

class UserController{

    static listarUsers = (req, res) => {
        users.find((err, users) => {
            res.status(200).json(users)
        });
    }

    static adicionarUsers = (req, res) => {
        users.push(req.body);
        res.status(201).send('Produto cadastrado com sucesso');
    }
    
    static atualizarUser= (req, res) => {
        let index = (users.findIndex(user => user.id == req.params.id));
        users[index].id = req.body.id;
        users[index].nome = req.body.nome;
        users[index].senha = req.body.senha;
        res.status(200).json(users);    
    }

    static deletarUser = (req, res) => {
        let index = (users.findIndex(user => user.id == req.params.id));
        let nome = users[index].nome;   
        users.pop(users[index]);
        res.status(200).json(`Produto ${nome} deletado com sucesso`);    
    }
}

export default UserController;