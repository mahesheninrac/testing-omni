const { MongoClient } = require('mongodb');
const uri = "your_mongodb_connection_string";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const jsonData = require("../dummyData.json")


async function run() {
    try {
        await client.connect();
        const database = client.db('your_database_name');
        const collection = database.collection('your_collection_name');

        // Insert the JSON data
        const result = await collection.insertMany(jsonData);
        console.log(`${result.insertedCount} documents were inserted`);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);
