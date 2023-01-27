const { PrismaClient } = require('@prisma/client')  //Importación
const prisma = new PrismaClient()   //Inicializamos 

//Funcion de CRUD para Prisma https://www.prisma.io/client
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
    console.log(post) */


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



    //Actualizar un dato de la tabla
    /* const updateUser = await prisma.users.update({
        where: {
            id: 2
        },
        data: {
            nameUser: 'Panchito',
            emailUser: 'pancho@changed.com'
        }
    })
    console.log(updateUser) */

    //Actualiza todos los usuarios que tenga el mismo correo
    /* const updateUserMany = await prisma.users.updateMany({
        where: {
            emailUser: 'qwerty@example.com'
        },
        data: {
            emailUser: 'actualizado@gmail.com'
        }
    })
    console.log(updateUserMany) */


    //Eliminar un usuario
    /* const deleteUSer = await prisma.users.delete({
        where: {
            id: 1
        }
    })
    console.log(deleteUSer) */



    //Eliminar demaciados usuario repetidos
    /* const deleteUserMany = await prisma.users.deleteMany({
        where: {
            nameUser: 'Juana'
        }
    })
    console.log(deleteUserMany) */
}



//Para Cachar algun ERROR 
main().catch((e) => {
    throw e
})
    .finally(async () => {
        await prisma.$disconnect()
    })
