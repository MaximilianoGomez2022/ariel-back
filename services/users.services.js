import { MongoClient, ObjectId } from "mongodb"
import bcrypt from 'bcrypt'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('AH_P3')
const users = db.collection('users')

async function login(userLogin){
    await client.connect()

    const user = await users.findOne({mail: userLogin.mail})

    if(!user){
        throw new Error('usuario incorrecto')
    }

    const isMatch = await bcrypt.compare(userLogin.password, user.password)

    if(!isMatch){
        throw new Error('Contraseña incorrecta')
    }

    return user
}

async function find(filter){
    await client.connect()

    const userColecction = await users.find(filter).toArray()
    return userColecction

}

async function findById(id) {
    await client.connect()

    const user = await users.findOne({ _id: ObjectId(id) })

    return user
}

async function create(user){

    const newUser = {...user}

    const userExist = await users.findOne({mail: newUser.mail})

    if(userExist) {
        throw new Error('el usuario ya existe')
    }

    const salt = await bcrypt.genSalt(10)

    const passwordHash = await bcrypt.hash(newUser.password, salt)

    newUser.password = passwordHash

    return client.connect()
    .then(async function(){
        return users.insertOne(newUser)
    })
}

async function remove(id){
    await client.connect()

    await users.deleteOne({_id: new ObjectId(id)})
}

export {
    find,
    findById,
    create,
    remove,
    login
}