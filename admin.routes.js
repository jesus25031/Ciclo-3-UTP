let express = require("express");
const adminRoute = express.Router();

// Admin Model
let adminModel = require("../models/admins");
let adminInventarioModel = require("../models/admin.inventarios");


//Consultar Admin y su inventario
// adminRoute.route("/admin").get((req, res) => {
//     adminModel.find((error, data, next) => {
//         if (error) {
//             return next(error);
//         } else {
//             console.log(error);
//             res.json(data);
//         }
//     });
// });

// adminRoute.route("/adminInventario/:user").get((req, res) => {
//     let query = { user: req.params.user };
//     adminInventarioModel.findOne(query, (error, data) => {
//         if (error) {
//             return next(error);
//         } else {
//             // console.log(error);
//             res.json(data);
//         }
//     });
// });

adminRoute.route("/adminInventario/user2").get((req, res) => {
    let query = { user: "demo"};
    adminInventarioModel.findOne(query, (error, data) => {
        if (error) {
            return next(error);
        } else {
            // console.log(error);
            res.json(data);
        }
    });
});

adminRoute.route("/adminInventario/demo").get((req, res) => {
    let query = { user: "demo"};
    adminInventarioModel.findOne(query, (error, data) => {
        if (error) {
            return next(error);
        } else {
            // console.log(error);
            res.json(data);
        }
    });
});


//Crear un admin y su inventario
// adminRoute.route("/create-admin/:user").post((req, res, next) => {
//     let newAdmin = new adminModel();
//     newAdmin.user = req.params.user;      

//     newAdmin.save(err => {
//         if (err) {
//             console.log(err);
//             res.send("Error while adding User");
//         } else {
//             res.send("User created");
//          }
//     });
// });

adminRoute.route("/create-adminInventario").post((req, res, next) => {
   adminInventarioModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

   
adminRoute.route("/update-admin-Inventario/:user").put((req, res, next) => {
    adminInventarioModel.findOneAndUpdate(
    
        req.params.user,
        {
            $set: req.body,
        },
        (error, data) => {
            if (error) {
                console.log(error);
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});


//Eliminar Admin y su Inventario   
adminRoute.route("/delete-admin/:user").delete((req, res, next) => {
    let query = { user: req.params.user };
    adminModel.findOneAndRemove(query, (error, data) => {
        if (error) {
            return next(req.params.user, error)
        } else {
            res.status(200).json({
            msg: data,
            });
        }
    });
});

adminRoute.route("/delete-adminInventario/:user").delete((req, res, next) => {
    let query = { user: req.params.user };
    adminInventarioModel.findOneAndRemove(query, (error, data) => {
        if (error) {
            return next(req.params.user, error)
        } else {
            // res.status(200).json({
            // msg: data,
            // });
        }
    });
});


module.exports = adminRoute;