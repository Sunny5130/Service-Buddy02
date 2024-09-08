const {MongoClient} = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

var dbName = 'serviceBuddy';

async function getData() {
  
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const services = db.collection('services');
  const data = await services.find().limit(100).toArray(); 
  return data;
}

async function insertData( data ){  
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const services = db.collection('services');
    services.insertOne(data);
}


module.exports = { getData, insertData };