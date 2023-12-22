'use server';
import { MongoClient, ObjectId } from 'mongodb';

const MONGODB_URI = process.env.MY_DB_URI;

export default async function fetchData(id) {
  const client = new MongoClient(MONGODB_URI, { });
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db('Shop');
    const collection = database.collection('Items');

    const id_query = new ObjectId(id);
    const result = await collection.find({ itemId: id_query }).toArray();

    // added next lines for fixing warning message: 
    // Warning: Only plain objects can be passed to Client Components from Server Components. Objects with toJSON methods are not supported. Convert it manually to a simple value before passing it to props.
    //   {_id: {}, itemId: {}, itemName: ..., itemPrice: ..., itemShortInfo: ..., itemInfo: ...}
    //         ^^
    const myString = JSON.stringify(result);
    const myNewResult = JSON.parse(myString);
    return myNewResult;

    // return result;
  } finally {
    await client.close();
    console.log("Disconnected from MongoDB");
  }
}