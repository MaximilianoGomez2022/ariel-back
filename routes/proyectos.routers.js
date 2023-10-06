import express from 'express'
import *as Proyectoscontroller from '../controllers/proyectos.controllers.js'

const route = express.Router()

route.get('/', Proyectoscontroller.verTrue)

route.get('/admin/projects', Proyectoscontroller.verTodos)

route.route('/admin/projects/nuevo')
.get(Proyectoscontroller.formNuevo)
.post(Proyectoscontroller.crearUno)

route.get('/admin/projects/:idProyecto/ver', Proyectoscontroller.verUno)

route.route('/admin/projects/:idProyecto/editar')
.get(Proyectoscontroller.formEditar)
.post(Proyectoscontroller.editar)

route.route('/admin/projects/:idProyecto/eliminar')
.get(Proyectoscontroller.formEliminar)
.post(Proyectoscontroller.eliminar)





export default route