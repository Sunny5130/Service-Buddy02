const {MongoClient} = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
var dbName = 'serviceBuddy';

async function valid( email ) {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const services = db.collection('userAuth');
    const data = await services.findOne( {"email" : email } ); 
    return ( data != null);
}

async function insertUser( data ){  
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const services = db.collection('userAuth');
    services.insertOne(data);
}

async function check( email, password ){
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const services = db.collection('userAuth');
    const data = await services.findOne( {"email" : email } ); 
    return (data.password === password)
}

module.exports = { valid, insertUser, check }


