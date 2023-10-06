import { MongoClient, ObjectId } from "mongodb";
const client = new MongoClient('mongodb://127.0.0.1:27017')

async function trearGeneros(){
    return client.connect()
    .then(function(){
        const db =  client.db('AH_P3')
        return db.collection('Generos').find().toArray()
    })
}

async function guardarGeneros(genero){
    const nuevoGenero = {
        ...genero
    }
    return client.connect()
    .then(function(){
        const db = client.db('AH_P3')
        return db.collection('Generos').insertOne(nuevoGenero)
    })
    .then(function(){
        return nuevoGenero
    })
}

async function editarGenero(id, genero){
    return client.connect()
    .then(function(){
        const db = client.db('AH_P3')
        return db.collection('Generos').updateOne({_id: new ObjectId(id)}, {$set:genero})
    })
}

async function reemplazarGenero(id, genero){
    return client.connect()
    .then(function(){
        const db = client.db('AH_P3')
        return db.collection('Generos').replaceOne({_id: new ObjectId(id)}, genero)
    })
}

async function eliminarGenero(id){
    return client.connect()
    .then(function(){
        const db = client.db('AH_P3')
        return db.collection('Generos').deleteOne({_id: new ObjectId(id)})
    })
}

async function traerPorId(id){
    return client.connect()
    .then(function(){
        const db = client.db('AH_P3')
        return db.collection('Generos').findOne({ _id: new ObjectId(id) })
    })
}

export {
    trearGeneros,
    guardarGeneros,
    editarGenero,
    reemplazarGenero,
    eliminarGenero,
    traerPorId
}