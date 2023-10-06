import *as TrabajosServices from '../../services/trabajos.services.js'

function findall(req, res){

    const filter = {}

    if(req.query.destacada) {

        if(req.query.destacada === 'true') {
            filter.destacada = true
        }

        if(req.query.destacada === 'false') {
            filter.destacada = false
        }
    }

    if(req.query.genero) {
        filter.genero = req.query.genero
    }

    TrabajosServices.traerTrabajos(filter)
    .then(function(trabajos){
        res.status(200).json(trabajos)
    })
}


function crearPelicula(req, res){
    const pelicula = {
        name : req.body.name,
        anio : req.body.anio,
        genero : req.body.genero    
    }

    PeliculasServices.guardarPelicula(pelicula)
    .then(function(nuevaPelicula){
        res.status(201).json(nuevaPelicula)
    })
}

function findById(req, res){

    const id = req.params.id

    TrabajosServices.traerPorId(id)
    .then(function(proyecto){
        if (proyecto) {
            res.status(200).json(proyecto)
        }   else {
            res.status(404).json({messagge : "Trabajo no encontrado"})
        }       
    })
}

function editById(req, res){
    const id = req.params.id

    const pelicula = {}

    if(req.body.name) {
        pelicula.name = req.body.name
    }

    if(req.body.anio) {
        pelicula.anio = req.body.anio
    }

    if(req.body.genero) {
        pelicula.genero = req.body.genero
    }
    
    PeliculasServices.editarPelicula(id, pelicula)
    .then(function(pelicula){
        if (pelicula) {
            res.status(200).json({messagge : "Pelicula editada con éxito."})
        }   else {
            res.status(404).json({messagge : "Pelicula no encontrada"})
        } 
    })
}

function deleteById(req, res){
    const id = req.params.id

    PeliculasServices.eliminarPelicula(id)
    .then(function(pelicula){
        if (pelicula) {
            res.status(200).json({messagge : "Pelicula eliminada con éxito."})
        }   else {
            res.status(404).json({messagge : "Pelicula no encontrada"})
        }       
    })
}

function replaceById(req, res){
    const id = req.params.id

    const pelicula = {
        name : req.body.name,
        genero : req.body.genero,
        anio : req.body.anio,
        destacada: req.body.destacada  
    }

    PeliculasServices.reemplazarPelicula(id, pelicula)
    .then(function(pelicula){
        if (pelicula) {
            res.status(200).json({messagge : "Pelicula reemplazada con éxito."})
        }   else {
            res.status(404).json({messagge : "Pelicula no encontrada"})
        }       
    })
}


export {
    findall,
    crearPelicula,
    findById,
    editById,
    replaceById,
    deleteById,
}