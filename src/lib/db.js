import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://mihir190801:NowFloats2024@cluster0.kmtwu3t.mongodb.net/sample_airbnb?retryWrites=true&w=majority"
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
