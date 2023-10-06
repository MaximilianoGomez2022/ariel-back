import express from 'express'
import cors from'cors'
import ProyectosRoutes from './routes/proyectos.routers.js'
import TecnologiasRoutes from './routes/tecnologias.routers.js'
import TrabajosApiRoute from './api/routes/trabajos.api.routes.js'
import TecnologiasApiRoute from './api/routes/generos.api.routes.js'
import UserApiRoute from './api/routes/users.api.routes.js'

const app = express();
app.set('view engine', 'ejs')

app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use('/', express.static('public'));

app.use('/', ProyectosRoutes)
app.use('/', TecnologiasRoutes)
app.use('/', TrabajosApiRoute)
app.use('/', TecnologiasApiRoute)
app.use('/', UserApiRoute)

app.listen(2022, function(){
    console.log('server started in https://localhost:2022');
})


