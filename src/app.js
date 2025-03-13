import  express from 'express';
import  'dotenv/config';
import animalRoutes from './routes/animal.js'
import reportRoutes from './routes/report.js'
import userRoutes from './routes/user.js'
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/animal', animalRoutes)
app.use('/report', reportRoutes)
app.use('/user', userRoutes)




try{const PORT = process.env.PORT || 4500
    app.listen(PORT, ()=>console.log('Conectado a ' + PORT))} 
catch (e) {console.log(e)}

