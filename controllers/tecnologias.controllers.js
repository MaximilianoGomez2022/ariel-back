import *as TecnologiasServices from '../services/generos.services.js'

function verTecnologias(req, res){
    TecnologiasServices.trearTecnologias()
    .then(function(tecnologias){
        res.render('admin/tecnologias/lista', {tecnologias})
    })
}

function formEliminar(req, res){
    const id = req.params.idTecnologia
    TecnologiasServices.traerPorId(id)
    .then(function(tecnologia){
        if(tecnologia) {
            res.render('admin/tecnologias/eliminar', {tecnologia})
        } else {
            res.render('404')
        }
        
    })
}

function eliminar(req, res){
    const id = req.params.idTecnologia
    TecnologiasServices.eliminarTecnologia(id)
    .then(function(){
        res.render('admin/tecnologias/success', {message : `La tecnología se eliminó correctamente`})
    })
}

function formNuevo(req, res){
    res.render('admin/tecnologias/nuevo')
}

function crearUna(req, res){
    const tecnologia = {
        name : req.body.name,
    }

    TecnologiasServices.guardarTecnologias(tecnologia)
    .then(function(nuevaTecnoloogia){
        res.render('./admin/tecnologias/success', {message : `La tecnología ${nuevaTecnoloogia.name} se agregó correctamente`})
    })
}

function formEditar(req, res){
    const id = req.params.idTecnologia
    TecnologiasServices.traerPorId(id)
    .then(function(tecnologia){
        res.render('admin/tecnologias/editar', {tecnologia})
    })
}

function editar(req, res){
    const id = req.params.idTecnologia

    const teconologia = {
        name : req.body.name,
    }
    TecnologiasServices.editarTecnologia(id, teconologia)
    .then(function(){
        res.render('admin/tecnologias/success', {message : `La tecnología se editó correctamente`})
    })
}




export {
    verTecnologias,
    formEliminar,
    eliminar,
    formNuevo,
    crearUna,
    formEditar,
    editar
}