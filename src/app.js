import  express from 'express';
import  'dotenv/config';
import animalRoutes from './routes/animal.js'
import bodyParser from 'body-parser';

const app = express();

// Middlewares de bodyParser para procesar las solicitudes JSON y URL-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/animal', animalRoutes)



try{const PORT = process.env.PORT || 4500
    app.listen(PORT, ()=>console.log('Conectado a ' +   PORT))} 
catch (e) {console.log(e)}


