import { ObjectId } from 'mongodb';
import dbClient from '../../config/dbClient.js'; 

class AnimalModel {
    async create(animal) {
        if (!animal) {
            throw new Error("No animal data provided.");
        }
        const callMascotas = dbClient.db.collection('animal');
        try {
            const result = await callMascotas.insertOne(animal);
            console.log('Animal successfully inserted:', result);
            return result;
        } catch (error) {
            console.error("Error inserting animal:", error);
            throw error;
        }
    }

    async getAll() {
        const callMascotas = dbClient.db.collection('animal');
        try {
            const result = await callMascotas.find().toArray();
            return result;
        } catch (error) {
            console.error("Error fetching all animals:", error);
            throw error;
        }
    }

    async getOne(id) {
        if (!id) {
            throw new Error("Animal ID is required.");
        }
        const callMascotas = dbClient.db.collection('animal');
        try {
            const result = await callMascotas.findOne({ _id: new ObjectId(id) });
            return result;
        } catch (error) {
            console.error("Error fetching animal:", error);
            throw error;
        }
    }

    async update(id, animal) {
        if (!id || !animal) {
            throw new Error("Animal ID and update data are required.");
        }
        const callMascotas = dbClient.db.collection('animal');
        try {
            const result = await callMascotas.updateOne(
                { _id: new ObjectId(id) },
                { $set: animal }
            );
            return result;
        } catch (error) {
            console.error("Error updating animal:", error);
            throw error;
        }
    }

    async delete(id) {
        if (!id) {
            throw new Error("Animal ID is required for deletion.");
        }
        const callMascotas = dbClient.db.collection('animal');
        try {
            const result = await callMascotas.deleteOne({ _id: new ObjectId(id) });
            return result;
        } catch (error) {
            console.error("Error deleting animal:", error);
            throw error;
        }
    }
}

export default new AnimalModel();
