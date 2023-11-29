'use server';
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.DB_URI;

export default async function fetchData(q) {
  const client = new MongoClient(MONGODB_URI, { });
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db('Shop');
    const collection = database.collection('Items');

    const regex = new RegExp(`^${q}`, 'i');
    const result = await collection.find({ itemName: regex }).toArray();

    return result;
  } finally {
    await client.close();
    console.log("Disconnected from MongoDB");
  }
}