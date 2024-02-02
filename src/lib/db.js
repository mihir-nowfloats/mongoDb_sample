import { MongoClient } from 'mongodb';

const uri = process.env.NEXT_PUBLIC_MONGO_URL
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;

async function connectDB() {
  if (!client) {
    client = new MongoClient(uri, options);
    await client.connect();
    console.log("DB CONNECTED")
  }

  return client.db();
}

export default connectDB;
