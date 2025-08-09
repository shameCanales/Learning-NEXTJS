import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://shamecanales1082:kwTT9egcVBnAEZTx@cluster0.daoqyjp.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data); //or data = {title, image, address, description}

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });

    
  }
}
