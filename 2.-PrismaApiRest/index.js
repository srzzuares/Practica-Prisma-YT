const express = require('express');
const { PrismaClient } = require('@prisma/client');
const PORT = process.env.PORT || 3000;
const Server = express();

const prisma = new PrismaClient();

Server.listen(PORT, (req, res) => { console.log('Server listening on port ' + PORT) })

Server.get('/', (req, res) => { res.send('HolaTerricola') })