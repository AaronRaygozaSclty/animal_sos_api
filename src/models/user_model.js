import { ObjectId } from 'mongodb';
import dbClient from '../../config/dbClient.js'; 

class userModel {
    async create(user) {
        if (!user) {
            throw new Error("No animal data provided.");
        }
        const callUser = dbClient.db.collection('user');
        try {
            const result = await callUser.insertOne(user);
            console.log('user successfully inserted:', result);
            return result;
        } catch (error) {
            console.error("Error inserting user:", error);
            throw error;
        }
    }

    async getAll() {
        const callUser = dbClient.db.collection('user');
        try {
            const result = await callUser.find().toArray();
            return result;
        } catch (error) {
            console.error("Error fetching all user:", error);
            throw error;
        }
    }

    async getOne(id) {
        if (!id) {
            throw new Error("user ID is required.");
        }
        const callUser = dbClient.db.collection('user');
        try {
            const result = await callUser.findOne({ _id: new ObjectId(id) });
            return result;
        } catch (error) {
            console.error("Error fetching user:", error);
            throw error;
        }
    }

    async update(id, user) {
        if (!id || !user) {
            throw new Error("Animal ID and update data are required.");
        }
        const callUser = dbClient.db.collection('user');
        try {
            const result = await callUser.updateOne(
                { _id: new ObjectId(id) },
                { $set: user }
            );
            return result;
        } catch (error) {
            console.error("Error updating User:", error);
            throw error;
        }
    }

    async delete(id) {
        if (!id) {
            throw new Error("Animal ID is required for deletion.");
        }
        const callUser = dbClient.db.collection('user');
        try {
            const result = await callUser.deleteOne({ _id: new ObjectId(id) });
            return result;
        } catch (error) {
            console.error("Error deleting user:", error);
            throw error;
        }
    }
}

export default new userModel();
