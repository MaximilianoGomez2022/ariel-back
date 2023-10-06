import express from 'express'
import cors from'cors'
import TrabajosApiRoute from './routes/trabajos.api.routes.js'

const app = express();

app.use(cors())
app.use(express.json())
app.use('/', TrabajosApiRoute)

export default app