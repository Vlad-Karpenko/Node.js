const mysql = require('mysql');

module.exports.insert = function (contactData) {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: 'node'
    });

    const data = [
        [contactData.name, contactData.surname, contactData.phone,
            contactData.email, contactData.password, contactData.checkbox],
    ];

    connection.connect(function (err) {
        if (err) throw err;
        console.log("Connected mySql!");
        const sql = "INSERT INTO user (first_name, last_name,phone,e_mail,password,checkbox) VALUES ?";
        connection.query(sql, [data], function (err, result) {
            if (err) throw err;
            console.log("1 record inserted to mySqlDb");
        });
        setInterval(function () {
            connection.query('SELECT 1');
        }, 5000);
    });
};

