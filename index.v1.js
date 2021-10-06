// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");


// const app = express();


// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// mongoose.connect("mongodb://localhost:27017/inventario", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// var db = mongoose.connection;

// db.on("open", () => {
//     console.log("Connected to mongoDB");
// });

// db.on("error", (error) => {
//     console.log(error);
// });

// let userModel = require("./inventario_schema");
// let tablaModel = require("./tabla_schema");

// // Routes de Administrador
// app.get("/", (req, res) => {
//     res.send("Hola");
// });


// app.post("/user/createUser", (req, res) => {
//     let newUser = new userModel();
//     newUser.active = true;
//     newUser.user = req.body.todouser;
//     newUser.conjunto = {carpetas_1: {archivo_1: {columnas:"4", filas:"2"}}};

//     newUser.save(err => {
//         if (err) {
//             console.log(err);
//             res.send("Error while adding User");
//         } else {
//             res.send("User created");
//          }
//     });

// });  

// app.post("/user/createTabla", (req, res) => {
//     let newTabla = new tablaModel();
//     newTabla.user = req.body.todouser;;
//     newTabla.tabla = { infoPosition:{"1x1":"1x1",
//                                     "1x2":"1x2",
//                                     "1x3":"1x3",
//                                     "1x4":"1x4",
//                                     "2x1":"2x1",
//                                     "2x2":"2x2",
//                                     "2x3":"2x3",
//                                     "2x4":"2x4",
//                                     "3x1":"3x1",
//                                     "3x2":"3x2",
//                                     "3x3":"3x3",
//                                     "3x4":"3x4",}}
//     newTabla.save(err => {
//         if (err) {
//             console.log(err);
//             res.send("Error while adding Tabla");
//         } else {
//             res.send("Tabla created");
//             }
//     });
// });  

// app.delete("/user/deleteUser/:user", (req, res) => {
//     let query = { user: req.params.user };
//     userModel.deleteOne(query, err => {
//         if (err) {
//             res.send("Error while deleting User");
//         } else {
//             res.send("User deleted");
//         }
//     });
    
// });

// app.delete("/user/deleteTabla/:user", (req, res) => {
//     let query = { user: req.params.user };
//     tablaModel.deleteOne(query, err => {
//         if (err) {
//             res.send("Error while deleting TablaUser");
//         } else {
//             res.send("TablaUser deleted");
//         }
//     });
    
// });

// // app.post("/user/update/:user/:columnas", (req, res) => {
// //     TablaModel.findOneAndUpdate(
// //         {user : req.params.user},
// //         {columnas : req.params.columnas},
// //         (err, todo) => {
// //             if (!err) {
// //             res.send("Good Work");
// //             }
// //         }
// //     );
// // });

   
// app.get("/users/actives", (req, res) => {
//     userModel.find({active: true}, (err, todos) => {
//         if (err) {
//             res.send("Error while fetching Users");
//      } else {
//      res.json(todos);
//      }
//      });
// });

// app.get("/users/info/", (req, res) => {
//     tablaModel.find({user: "1@gmail.com"}, (err, todos) => {
//         if (err) {
//             res.send("Error while fetching Users");
//      } else {
//      res.json(todos);
//      }
//      });
// });

// app.listen(3000, () => {
//  console.log("Server started on port 3000");
// });
