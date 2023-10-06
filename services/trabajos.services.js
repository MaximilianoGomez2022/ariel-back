import { MongoClient, ObjectId} from "mongodb"
const client = new MongoClient('mongodb+srv://portfolio2023:Riverplate_SAG_1991@cluster0.ghun0gd.mongodb.net/?retryWrites=true&w=majority')

async function traerDestacadas(){
    return client.connect()
    .then(function(){
        const db = client.db('Ariel')
        return db.collection('Trabajos').find({destacada:true}).toArray()
    })
    .catch(function(err){

    })
}

async function traerTrabajos(filter){

    const filterQuery =  {
        ...filter
    }

    if(filterQuery.genero) {
        filterQuery.genero = {$regex : filterQuery.genero, $options: 'i'}
    } 

    return client.connect()
    .then(async function(){
        const db = client.db('Ariel')
        return db.collection('Trabajos').find(filterQuery).toArray()
    })
}

async function traerPorId(id){
    return client.connect()
    .then(function(){
        const db = client.db('Ariel')
        return db.collection('Trabajos').findOne({ _id: new ObjectId(id) })
    })
}

async function guardarPelicula(pelicula){
    const nuevaPelicula = {
        ...pelicula
    }
    return client.connect()
    .then(function(){
        const db = client.db('Ariel')
        return db.collection('Trabajos').insertOne(nuevaPelicula)
    })
    .then(function(){
        return nuevaPelicula
    })
}

async function editarPelicula(id, pelicula){
    return client.connect()
    .then(function(){
        const db = client.db('Ariel')
        return db.collection('Trabajos').updateOne({_id: new ObjectId(id)}, {$set:pelicula})
    })
}

async function reemplazarPelicula(id, pelicula){
    return client.connect()
    .then(function(){
        const db = client.db('Ariel')
        return db.collection('Trabajos').replaceOne({_id: new ObjectId(id)},pelicula)
    })
}

async function eliminarPelicula(id){
    return client.connect()
    .then(function(){
        const db = client.db('Ariel')
        return db.collection('Trabajos').deleteOne({_id: new ObjectId(id)})
    })
}

export{
    traerTrabajos,
    traerDestacadas,
    traerPorId,
    guardarPelicula,
    editarPelicula,
    reemplazarPelicula,
    eliminarPelicula
}