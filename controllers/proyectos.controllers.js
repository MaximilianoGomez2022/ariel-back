import *as ProyectosServices from '../services/trabajos.services.js'
import *as TecnologiasServices from '../services/generos.services.js'

function verTodos(req, res){
    ProyectosServices.traerProyectosTodos()
    .then(function(proyectos){
        res.render('admin/projects', {proyectos})
    })
}

function formEliminar(req, res){
    const id = req.params.idProyecto
    ProyectosServices.traerPorId(id)
    .then(function(proyecto){
        if(proyecto) {
            res.render('admin/projects/eliminar', {proyecto})
        } else {
            res.render('404')
        }
        
    })
}

function eliminar(req, res){
    const id = req.params.idProyecto
    ProyectosServices.eliminarProyecto(id)
    .then(function(){
        res.render('admin/projects/sucess', {message : `El proyecto se eliminó correctamente`})
    })
}

function verTrue(req, res){
    ProyectosServices.traerProyectosTrue()
    .then(function(proyectos){
        res.render('Home', {proyectos})
    })
}

function verUno(req, res){
    const id = req.params.idProyecto
    ProyectosServices.traerPorId(id)
    .then(function(proyecto){
        if(proyecto) {
            res.render('admin/projects/verDetalle', {proyecto})
        } else {
            res.render('404')
        }
        
    })
}

function formNuevo(req, res){
    TecnologiasServices.trearTecnologias()
    .then(function(tecnologias){
        res.render('admin/projects/nuevo', {tecnologias})
    })
}

function crearUno(req, res){
    const proyecto = {
        name : req.body.name,
        description : req.body.description,
        link : req.body.link,
        tecnologia : req.body.tecnologia
    }

    ProyectosServices.guardarProyecto(proyecto)
    .then(function(nuevoProyecto){
        res.render('./admin/projects/sucess', {message : `El proyecto ${nuevoProyecto.name} se agregó correctamente`})
    })
}

function formEditar(req, res){
    const id = req.params.idProyecto
    let tecnologias = []

    TecnologiasServices.trearTecnologias()
    .then(function(todas){
        tecnologias = todas
        return ProyectosServices.traerPorId(id)
    })
    .then(function(proyecto){
        res.render('admin/projects/editar', {proyecto, tecnologias})
    })
}

function editar(req, res){
    const id = req.params.idProyecto

    const proyecto = {
        name : req.body.name,
        description : req.body.description,
        link : req.body.link,
        tecnologia : req.body.tecnologia
    }
    ProyectosServices.editarProyecto(id, proyecto)
    .then(function(){
        res.render('admin/projects/sucess', {message : `El proyecto se editó correctamente`})
    })
}

export{
    verTodos,
    verTrue,
    verUno,
    crearUno,
    formNuevo,
    formEditar,
    editar,
    formEliminar,
    eliminar
}