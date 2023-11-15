// THIS VERSION IS WORSE, because I had to comment 8th line of code: await client.close()
// read more about it in comment to testShopSecond.js
// Excluding this line of code and so omiting closing of DB connection is acceptable approach for solving this problem
import connectToDatabase from '../lib/dbConnect';

export default async function handler(req, res) {
  const client = await connectToDatabase();
  const db = client.db('DatabaseName');
  const collection = db.collection('CollectionName');
  const data = await collection.find().toArray();
  // await client.close();
  return (
    <div>
      {/* {data.map((item) => (
        <p key={item._id}>{JSON.stringify(item)}</p>
      ))} */}
      {data[0].name}
    </div>
  );
}
