import { MongoClient } from 'mongodb';

const uri = process.env.DB_URI;
const options = { };

let client;
let clientPromise;

if (!process.env.DB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}
clientPromise = MongoClient.connect(uri, options);

// if (process.env.NODE_ENV === 'development') {
//   if (!clientPromise) {
//     clientPromise = MongoClient.connect(uri, options);
//   }
// }

export default async function connectToDatabase() {
  if (!client) {
    client = await clientPromise;
  }
  return client;
}
