const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/test';

module.exports.mongo = function (contactData) {
    MongoClient.connect(url, {useNewUrlParser: true}, function (err, client) {
        const db = client.db('user');
        console.log('Connect');
        /*INSERT*/
        db.collection('user').insertOne(contactData, function (err, result) {
            if (err) {
                throw err
            }
            console.log(result.ops)
        });

        client.close(function () {
            console.log('DB close');
        });
    });
};

// /*UPDATE*/
// db.collection('user').updateOne({name: 'Vlad'}, {$set: {name: 'Andrew'}});
//
// /*REMOVE*/
// db.collection('user').removeOne({name: 'Andrew'});
//
/*FIND*/
// let cursor = db.collection('user').find();
// cursor.toArray(function (err, res) {
//     console.log(res)
// });



