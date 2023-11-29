'use server';
import { MongoClient, ObjectId } from 'mongodb';

const MONGODB_URI = process.env.DB_URI;

export default async function fetchData(id) {
  const client = new MongoClient(MONGODB_URI, { });
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db('Shop');
    const collection = database.collection('Items');

    const id_query = new ObjectId(id);
    const result = await collection.find({ itemId: id_query }).toArray();

    return result;
  } finally {
    await client.close();
    console.log("Disconnected from MongoDB");
  }
}