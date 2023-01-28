const express = require('express');
const { PrismaClient } = require('@prisma/client');
const PORT = process.env.PORT || 3000;
const Server = express();

const prisma = new PrismaClient();
Server.use(express.json())
Server.listen(PORT, (req, res) => { console.log('Server listening on port ' + PORT) })

Server.get('/', (req, res) => { res.send('HolaTerricola') })


//Routes CRUD

//Route Created
Server.post('/registro',async (req, res) => {
    const {nameClient, lastNameClient, emailClient} = req.body
    const resultadoCreado = await prisma.Client.create({
        data: {
            nameClient,
            lastNameClient,
            emailClient
        }
    })
    res.json(resultadoCreado)
})

//Route Read
Server.get('/registros', async (req, res) => {
    const resultados = await prisma.Client.findMany()
    res.json(resultados)
})

//Route Update
Server.put('/client/:id', async (req,res) => {
    const {id} = req.params
    const {nameClient, lastNameClient, emailClient} = req.body
    const resultadoActualizado = await prisma.Client.update({
        where: {id: Number(id) },
        data: {
            nameClient,
            lastNameClient,
            emailClient
        }
    })
    res.json(resultadoActualizado)
})

//Route Delete
Server.delete('/client/:id', async (req,res) => {
    const {id} = req.params
    const resultadoEliminado = await prisma.Client.delete({
        where:{id: Number(id)}
    })
    res.json('Eliminado')
})