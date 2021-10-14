mongoose = require("mongoose");
bodyParser = require("body-parser");
cors = require("cors");
const express = require("express");
database = require("./database");


// Connect mongoDB
mongoose.Promise = global.Promise;

mongoose.connect(
    database.cloudUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
 })
 .then(
    () => {
        console.log("Database cloud connected");
    },
    (error) => {
        console.log("Database could't be connected to: " + error);
 }
 );

const adminAPI = require("./routes/admin.routes");
const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

app.use(cors());

//heroku
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
   
   

// API
app.use("/api", adminAPI);




// Create port

app.set("PORT", process.env.PORT || 3000);
app.listen(app.get("PORT"), () => {
 console.log(`Server started on port: ${app.get("PORT")}`);
});

// // Find 404
// app.use((req, res, next) => {
//     next(createError(404));
// });

// // error handler
// app.use(function(err, req, res) {
//     console.error(err.message);
//     if (!err.statusCode) err.statusCode = 500;
//     res.status(err.statusCode).send(err.message);
// });
