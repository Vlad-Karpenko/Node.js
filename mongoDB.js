const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, {useNewUrlParser: true}, function (err, client) {

    const db = client.db('user');
    let user = {name: 'Vlad', surname: 'Karpenko', age: 20};

    /*INSERT*/
    db.collection('user').insertOne(user, function (err, result) {
        if (err) {
            throw err
        }
    });

    /*UPDATE*/
    db.collection('user').updateOne({name: 'Vlad'}, {$set: {name: 'Andrew'}});

    /*REMOVE*/
    db.collection('user').removeOne({name: 'Andrew'});

    /*FIND*/
    let cursor = db.collection('user').find();
    cursor.toArray(function (err, res) {
        console.log(res)
    });

    client.close();
});

