<template>
    <v-app class="body">
        <header >
            <div class = "encabezado">
                <div class = "encabezado_logo">
                    <img class = "imagen_logo" src="../../Recursos/Logo.png">
                </div>
                <div class = "encabezado_botones_vender">
                    <div class = "boton_vender">
                        <router-link to="/operario">Vender</router-link>
                    </div>
                </div>
                <div class = "encabezado_botones_consultar" >
                    <div class = "boton_consultar">
                        <router-link to="/operario/consultar">Consultar Inventario</router-link>
                    </div>  
                </div>
                <div class = "encabezado_botones_Salir" >
                    <div class = "boton_salir">
                         <router-link to="/">Salir</router-link>
                    </div>
                </div>            
            </div>
        </header> 
        <section class="container-ven">
            <div class="seccion-Carpetas">
                <div class="cajon-carpetas">
                    <div class="inventarios-titulo">
                        <p>INVENTARIOS </p>
                    </div>

                    <!-- Carpeta Principal -->
                    <div class="boton-inventario">
                        <div>
                            <div id="openFolder">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-person-fill" viewBox="0 0 16 16">
                                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z"/>
                                </svg>
                            </div>  
                            <p>
                                Operario
                            </p>
                        </div>
                    </div>
                    <div class="contenido-inventario" type="button">
                        <a> inventario1-bs</a>
                        <div id="openFile">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-ruled" viewBox="0 0 16 16">
                                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5v2zM3 12v-2h2v2H3zm0 1h2v2H4a1 1 0 0 1-1-1v-1zm3 2v-2h7v1a1 1 0 0 1-1 1H6zm7-3H6v-2h7v2z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Seccion-Tabla">
                    <div class="Titulo">
                        <p>Inventario1</p>
                    </div>
                    <div class="ventana_interaccion">
                        <div class="inputs">
                            <datalist id="name_productos">
                                    <option></option>
                                    <!-- <option value="Amarillo"></option>
                                    <option value="Burdeos"></option>
                                    <option value="Caoba"></option>
                                    <option value="Marrón"></option>
                                    <option value="Naranja"></option>
                                    <option value="Verde"></option> -->
                            </datalist>
                             <div id="producto"><input id="input_producto" list="name_productos" 
                                                type="text" placeholder=" Producto"  
                                                v-on:change="setItems()">
                            </div>
                             <div id="cantidad"><input id="input_cantidad" type="number" 
                                                placeholder=" Cantidad"
                                                v-on:change="setTotal()"></div>
                             <div id= "total">Total: $ {{total}}</div>
                        </div>
                        <div class="information">
                            <ul>
                                <li>Producto: {{producto}}</li>
                                <li>Precio Unidad: ${{p_unidad}}</li>
                                <li>Cantidad en Stock: {{c_stock}}</li>
                                <li>Ubicación: {{ubicacion}}</li>
                            </ul>
                        </div>
                        <div class="buttons">
                            <div>
                                <v-btn id="vender" color="success" @click="actualizarAdminInventario()">Vender</v-btn>
                                <v-btn id="cancelar" color="error" @click="btn_cancelar()">Cancelar</v-btn>
                            </div>
                        </div>
                    </div>
            </div>

        </section>
    </v-app>
</template>

<script>
    import '../../Css/operario-ventas/Body.css'
    import '../../Css/operario-ventas/Header.css'
    import '../../Css/operario-ventas/CajonCarpetas.css'
    import '../../Css/operario-ventas/Container.css'
    import '../../Css/operario-ventas/Tabla.css'
    import axios from "axios";

   

    export default {
        
        created(){
            this.getAdminInfo()
        },
        data(){
           
            return{
                producto: "",
                p_unidad: "",
                c_stock: "",
                ubicacion: "",
                total: 0,
                tabla: {
                        columnas_1:
                            {filas_1:" Columna 1", filas_2:" ", filas_3:" ", filas_4:" ", filas_5:" ", filas_6:" ", filas_7:" "},
                        columnas_2:
                            {filas_1:" Columna 1", filas_2:" ", filas_3:" ", filas_4:" ", filas_5:" ", filas_6:" ", filas_7:" "},
                        columnas_3:
                            {filas_1:" Columna 1", filas_2:" ", filas_3:" ", filas_4:" ", filas_5:" ", filas_6:" ", filas_7:" "},
                        columnas_4:
                            {filas_1:" Columna 1", filas_2:" ", filas_3:" ", filas_4:" ", filas_5:" ", filas_6:" ", filas_7:" "}

                }, 
            
                actividad:{
                        Fecha: "",
                        Hora: "",
                        Operario:"demo-Operario",
                        Producto: "",
                        Cantidad: "",
                        Total: ""
                },
            }
        },
        methods:{
             getAdminInfo(){  
                console.log("Cargando datos");
                let apiURL = "https://agile-bastion-32260.herokuapp.com/api/adminInventario/" + "demo";
                    axios
                        .get(apiURL)
                        .then((res) => {
                            this.tabla = res.data.tabla;
                        })
                        .catch((error) => {
                            console.log(error);
                        });     
            },
            setItems(){
                let text = document.getElementById("input_producto").value;
                this.producto = text;

                for( let filas in  this.tabla.columnas_1){

                    if( this.tabla.columnas_1[filas] == this.producto){
                        this.p_unidad= this.tabla.columnas_2[filas],
                        this.c_stock= this.tabla.columnas_3[filas],
                        this.ubicacion= this.tabla.columnas_4[filas]
                    }
                }

            },
            setTotal(){
                let cant = document.getElementById("input_cantidad").value;

                this.total = this.p_unidad * cant;
            },

            btn_cancelar(){
                document.getElementById("input_cantidad").value = "";
                document.getElementById("input_producto").value = "";
                this.producto = "";
                this.p_unidad = "";
                this.c_stock = "";
                this.ubicacion = "";
                this.total = "";
            },


            prepararDatos(){
                let hoy = new Date();
                var fecha = hoy.getFullYear() + "-"  + ( hoy.getMonth() + 1 ) + "-" + hoy.getDate();
                var hora = hoy.getHours() + ':' + hoy.getMinutes();
                let cant = document.getElementById("input_cantidad").value

                this.actividad.Fecha = fecha;
                this.actividad.Hora = hora;
                this.actividad.Producto = this.producto,
                this.actividad.Cantidad = cant,
                this.actividad.Total = this.total

            },
            
            crear_actividad(){
                let apiURL = "https://agile-bastion-32260.herokuapp.com/api/create-adminActividad";
                axios
                    .post(apiURL, this.actividad)

            },

            actualizarAdminInventario() {                  
                let cant = document.getElementById("input_cantidad").value;    
                for( let filas in  this.tabla.columnas_1){

                    if( this.tabla.columnas_1[filas] == this.producto){
                        // console.log("producto = " +  this.tabla.columnas_1[filas])
                        // console.log("Precio Unidad = " + this.tabla.columnas_2[filas])
                        // console.log("Cantidad en Stock = " + this.tabla.columnas_3[filas])
                        // console.log("Ubicación = " + this.tabla.columnas_4[filas])
                        let newCant = (parseInt(this.tabla.columnas_3[filas]) - (parseInt(cant)))
                        this.tabla.columnas_3[filas] = newCant
                        console.log(this.tabla.columnas_3[filas])
                    }
                }
                
                let apiURL = 'https://agile-bastion-32260.herokuapp.com/apiupdate-cantidad-Inventario/demo/';
                    
                    axios
                        .put(apiURL, this.tabla)

                document.getElementById("input_cantidad").value = "";
                document.getElementById("input_producto").value = "";
                this.producto = "";
                this.p_unidad = "";
                this.c_stock = "";
                this.ubicacion = "";
                this.total = "";
            }
           
        }
        
    }

        

</script> 