import { ObjectId } from 'mongodb';
import dbClient from '../../config/dbClient.js'; 

class AnimalModel {
    async create(animal) {
        if (!animal) {
            throw new Error("No animal data provided.");
        }
        const callAnimal = dbClient.db.collection('animal');
        try {
            const result = await callAnimal.insertOne(animal);
            console.log('Animal successfully inserted:', result);
            return result;
        } catch (error) {
            console.error("Error inserting animal:", error);
            throw error;
        }
    }

    async getAll() {
        const callAnimal = dbClient.db.collection('animal');
        try {
            const result = await callAnimal.find().toArray();
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
        const callAnimal = dbClient.db.collection('animal');
        try {
            const result = await callAnimal.findOne({ _id: new ObjectId(id) });
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
        const callAnimal = dbClient.db.collection('animal');
        try {
            const result = await callAnimal.updateOne(
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
        const callAnimal = dbClient.db.collection('animal');
        try {
            const result = await callAnimal.deleteOne({ _id: new ObjectId(id) });
            return result;
        } catch (error) {
            console.error("Error deleting animal:", error);
            throw error;
        }
    }
}

export default new AnimalModel();
