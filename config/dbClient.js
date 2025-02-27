import { MongoClient } from "mongodb";

class dbCLient {
    constructor() {
        const queryString = "mongodb://localhost:27017";
        this.client = new MongoClient(queryString);
        this.db = this.client.db;  // Inicializamos la base de datos como null
    }

    async connectdb() {
        try {
            await this.client.connect();  // Intentamos la conexión
            this.db = this.client.db('animal_sos');  // Establecemos la base de datos
            console.log('Conectado al server');
            // Opcional: Verificamos las colecciones disponibles
            const collections = await this.db.listCollections().toArray();
            console.log('Colecciones:', collections);  // Mostramos las colecciones
        } catch (e) {
            console.log('Error al conectar:', e);
        }
    }
}

// Crear una instancia del cliente y conectar
const client = new dbCLient();
client.connectdb();

export default client;
