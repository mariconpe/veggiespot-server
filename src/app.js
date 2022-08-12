import express from 'express'
import db from './config/dbConnect.js'
import produtos from './models/Produto.js'
import routes from './routes/index.js'


db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
    console.log('Conexão com DB feita com sucesso')
});

const app = express();

app.use(express.json());

routes(app);

app.get('/produtos/:id', (req, res) => {
    let index = (produtos.findIndex(produto => produto.id == req.params.id));
    res.status(200).json(produtos[index]);
});


export default app;

// const produtos = [
//     {
//         'id': 1,
//         'nome':'Leite de soja',
//         'categoria':'Leites',
//         'estoque': 157,
//         'valor': 18.90
//     },
//     {
//         'id': 2,
//         'nome':'Leite de aveia',
//         'categoria':'Leites',
//         'estoque': 69,
//         'valor': 14.90
//     },
// ]
