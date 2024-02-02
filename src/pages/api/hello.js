// pages/api/random.js

import connectDB from "@/lib/db";

export default async function handler(req, res) {
  try {
    // Connect to the MongoDB database
    const db = await connectDB();

    // Access the desired collection (sample_airbnb.listingsAndReviews)
    const collection = db.collection('listingsAndReviews');

    // console.log(collection,"COLLECTION")

    // Fetch all documents in the collection
    let data = await collection.find().limit(10).toArray();
    // Disconnect from the database
    // await db.close();

    // Send the data as the API response
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
