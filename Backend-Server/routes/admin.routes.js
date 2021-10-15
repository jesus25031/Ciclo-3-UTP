let express = require("express");
const adminRoute = express.Router();


let actividadModel = require("../models/actividades");
let adminInventarioModel = require("../models/admin.inventarios");


//Consultar Admin y su inventario
// adminRoute.route("/admin/actividad").get((req, res) => {
//     actividadModel.find((error, data, next) => {
//         if (error) {
//             return next(error);
//         } else {
//             // console.log(error);
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
adminRoute.route("/actividades/demo").get((req, res) => {
    actividadModel.find((error, data) => {
        if (error) {
          return next(error);
        } else {
            // console.log(error);
            res.json(data);
        }
    });
});

// adminRoute.route("/adminActividad/demo").get((req, res) => {
//     let query = { user: "demo"};
//     actividadModel.findOne(query, (error, data) => {
//         if (error) {
//             return next(error);
//         } else {
//             // console.log(error);
//             res.json(data);
//         }
//     });
// });

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
            res.json(data);
        }
    });
});

adminRoute.route("/create-adminActividad").post((req, res, next) => {
    actividadModel.create(req.body, (error, data) => {
         if (error) {
             return next(error);
         } else {
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

adminRoute.route("/update-cantidad-Inventario/:user").put((req, res, next) => {
    adminInventarioModel.findOneAndUpdate(
    
        req.params.user,
        {
            tabla: req.body,
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


// adminRoute.route("/update-admin-actividad/:user").put((req, res, next) => {
//     actividadModel.findOneAndUpdate(
    
//         req.params.user,
//         {
//             $set: req.body,
//         },
//         (error, data) => {
//             if (error) {
//                 console.log(error);
//                 return next(error);
//             } else {
//                 res.json(data);
//             }
//         }
//     );
// });


//Eliminar Admin y su Inventario   
// adminRoute.route("/delete-admin/:user").delete((req, res, next) => {
//     let query = { user: req.params.user };
//     adminModel.findOneAndRemove(query, (error, data) => {
//         if (error) {
//             return next(req.params.user, error)
//         } else {
//             res.status(200).json({
//             msg: data,
//             });
//         }
//     });
// });

adminRoute.route("/delete-adminInventario/:user").delete((req, res, next) => {
    let query = { user: req.params.user };
    actividadModel.findOneAndRemove(query, (error, data) => {
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