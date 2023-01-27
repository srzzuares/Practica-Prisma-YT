const { PrismaClient } = require('@prisma/client')  //Importación
const prisma = new PrismaClient()   //Inicializamos 

//Funcion de CRUD para Prisma
async function main() {
    //Crear Un User
    /* const post = await prisma.users.create({
        data: {
            nameUser: 'Juan',
            emailUser: 'kenaa@example.com'
        }
    }) */
    //Crearvarios user mediante un array de objetos
    /* const post = await prisma.users.createMany({
        data: [
            { nameUser: 'Juana', emailUser: 'juana@example.com' },
            { nameUser: 'Marias', emailUser: 'ayer@example.com' },
            { nameUser: 'Pacheco', emailUser: 'qwerty@example.com' }
        ]
    })
    console.log(post)
    */

    //Obtener todos los users
    const allUsers = await prisma.users.findMany()
    //console.log(allUsers)



    //Obtener un User
    const idUser = await prisma.users.findUnique({
        where: {
            id: 1
        }
    })
    //console.log(idUser)



    //






}



//Para Cachar algun ERROR 
main().catch((e) => {
    throw e
})
    .finally(async () => {
        await prisma.$disconnect()
    })
