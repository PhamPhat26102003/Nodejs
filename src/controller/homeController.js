const connection = require('../config/database');

const handleGetHomePage = (req, res) => {

    let users = [];

    connection.query(
        `SELECT * FROM Users WHERE name = "phat"`,
        function (err, result, feild){
            users = result;
            console.log(result)

            console.log(">> check users: ", users)

            res.send(JSON.stringify(users))
        }
    )
}

const handleGetHomePage1 = (req, res) => {
    // res.send('Hello World, my name is Pham Phat!')
    res.render('demo.ejs');
}

module.exports = {
    handleGetHomePage,
    handleGetHomePage1
}