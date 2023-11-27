// This version is better, because I can manualy close connection to DB.
// In first version of code there is some problem with 8th line of code: await client.close():
// On first load page loads info from DB, but after reload I get message:
// "MongoNotConnectedError: Client must be connected before running operations"

// Import necessary modules
import { MongoClient } from 'mongodb';

// Fetch MongoDB URI from environment variable
const MONGODB_URI = process.env.DB_URI;

async function fetchData() {
    const client = new MongoClient(MONGODB_URI, { });
try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db('DatabaseName');
    const collection = database.collection('CollectionName');

    const result = await collection.find().toArray();

    return result;
  } finally {
    await client.close();
    console.log("Disconnected from MongoDB");
  }
}

async function Items() {
  const data = await fetchData();

  return (
    <div>
      <h1>Your Next.js Page</h1>
      <p>data: {data[0].name}</p>
    </div>
  );
}

export default Items;
