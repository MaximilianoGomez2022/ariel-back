import express from "express";
import *as TecnologiasController from '../controllers/tecnologias.controllers.js'

const route = express.Router()

route.get('/admin/tecnologias/lista', TecnologiasController.verTecnologias)

route.route('/admin/tecnologias/nuevo')
.get(TecnologiasController.formNuevo)
.post(TecnologiasController.crearUna)

route.route('/admin/tecnologias/:idTecnologia/editar')
.get(TecnologiasController.formEditar)
.post(TecnologiasController.editar)

route.route('/admin/tecnologias/:idTecnologia/eliminar')
.get(TecnologiasController.formEliminar)
.post(TecnologiasController.eliminar)

export default route