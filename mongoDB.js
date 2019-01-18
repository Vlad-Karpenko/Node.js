const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/test';

module.exports.insert = function (contactData) {
    MongoClient.connect(url, {useNewUrlParser: true}, function (err, client) {
        const db = client.db('user');
        console.log('Connect');
        /*INSERT*/
        db.collection('user').insertOne(contactData, function (err, result) {
            if (err) {
                throw err
            }
        });
        client.close(function () {
            console.log('DB close');
        });
    });
};

/*FIND*/
// let cursor = db.collection('user').find();
// cursor.toArray(function (err, res) {
//     console.log(res)
// });



