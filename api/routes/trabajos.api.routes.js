import express from "express"
import *as TrabajosApiController from '../controllers/trabajos.api.controllers.js'
import { isLogin, isAdmin } from "../../middleware/auth.middleware.js"

const route = express.Router()

route.route('/api/trabajos')
.get(TrabajosApiController.findall)
.post([isLogin, isAdmin],TrabajosApiController.crearPelicula)

route.route('/api/trabajos/:id')
.get(TrabajosApiController.findById)
.patch([isLogin, isAdmin],TrabajosApiController.editById)
.put([isLogin, isAdmin],TrabajosApiController.replaceById)
.delete([isLogin, isAdmin],TrabajosApiController.deleteById)

export default route
