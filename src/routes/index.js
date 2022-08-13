import express from 'express';
import produtos from './produtosRoutes.js';
import users from './usersRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'VeggieSpot'})
    })

    app.use(
        express.json(),
        produtos,
        users
    )
}

export default routes;