import { ObjectId } from 'mongodb';
import dbClient from '../../config/dbClient.js'; 


class reportModel {
    
    async create(report) {
        if (!report) {
            throw new Error("No report data provided.");
        }
        const callReport = dbClient.db.collection('report');
        try {
            const result = await callReport.insertOne(report);
            console.log('report successfully inserted:', result);
            return result;
        } catch (error) {
            console.error("Error inserting report :", error);
            throw error;
        }
    }
}

export default new reportModel();