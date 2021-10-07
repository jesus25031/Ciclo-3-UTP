<template>
    <v-app class="body">
        <header >
            <div class = "encabezado">
                <div class = "encabezado_logo">
                    <img class = "imagen_logo" src="../../Recursos/Logo.png">
                </div>
                <div class = "encabezado_botones_vender">
                    <div class = "boton_vender">
                        <a href = "../Vender/vender.html">Vender</a>
                    </div>
                </div>
                <div class = "encabezado_botones_consultar" >
                    <div class = "boton_consultar">
                        <a href = "consultar.html">Consultar Inventario</a>
                    </div>  
                </div>
                <div class = "encabezado_botones_Salir" >
                    <div class = "boton_salir">
                        <a href = "Subpaginas/Login/login.html">Salir</a>
                    </div>
                </div>            
            </div>
        </header> 
        <section class="Container">
            <div class="Seccion-Carpetas">
                <div class="cajon-carpetas">
                    <div class="inventarios-titulo">
                        <P>INVENTARIOS </P>
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

                    <!-- Contenido de la carpeta -->
                    <div class="contenido-inventario" type="button">
                        <a v-on:click="getAdminInfo()"> inventario1-bs</a>
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
                <div class="Tabla" style="overflow: scroll;">
                    <table class="table  table-bordered">
                        <thead class="table-dark">
                        <tr>
                            <th scope="col"><div class="columna"><p v-text="admin_inventarios.tabla.columnas_1.filas_1"></p></div></th>
                            <th scope="col"><div class="columna"><p v-text="admin_inventarios.tabla.columnas_2.filas_1"></p></div></th>
                            <th scope="col"><div class="columna"><p v-text="admin_inventarios.tabla.columnas_3.filas_1"></p></div></th>
                            <th scope="col"><div class="columna"><p v-text="admin_inventarios.tabla.columnas_4.filas_1"></p></div></th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col"><div class="columna"><p v-text="admin_inventarios.tabla.columnas_1.filas_2"></p></div></th>
                                <th scope="col"><div class="columna"><p v-text="admin_inventarios.tabla.columnas_2.filas_2"></p></div></th>
                                <th scope="col"><div class="columna"><p v-text="admin_inventarios.tabla.columnas_3.filas_2"></p></div></th>
                                <th scope="col"><div class="columna"><p v-text="admin_inventarios.tabla.columnas_4.filas_2"></p></div></th>
                            </tr>
                            <tr>
                                <th scope="col"><div class="columna"><p v-text="admin_inventarios.tabla.columnas_1.filas_3"></p></div></th>
                                <th scope="col"><div class="columna"><p v-text="admin_inventarios.tabla.columnas_2.filas_3"></p></div></th>
                                <th scope="col"><div class="columna"><p v-text="admin_inventarios.tabla.columnas_3.filas_3"></p></div></th>
                                <th scope="col"><div class="columna"><p v-text="admin_inventarios.tabla.columnas_4.filas_3"></p></div></th>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    </v-app>
</template>

<script>
    import '../../Css/operario-consultar/Body.css'
    import '../../Css/operario-consultar/Header.css'
    import '../../Css/operario-consultar/CajonCarpetas.css'
    import '../../Css/operario-consultar/Container.css'
    import '../../Css/operario-consultar/Tabla.css'
    import axios from "axios";

    export default {
        created(){
            this. getAdminInfo()
        },  
        data() {
            return{
                admin_inventarios:{
                    user: "demo",
                    archivo: 1,
                    archivo_name: "",
                    tabla: {
                            columnas_1:
                                {filas_1:" Columna 1", filas_2:" ", filas_3:" "},
                            columnas_2:
                                {filas_1:" Columna 2", filas_2:"", filas_3:" "},
                            columnas_3:
                                {filas_1:" Columna 3", filas_2:" ", filas_3:" "},
                            columnas_4:
                                {filas_1:" Columna 4", filas_2:" ", filas_3:" "}}

                }, 
            };
        },

        methods:{
                getAdminInfo(){  
                    console.log("Cargando datos");
                    let apiURL = "http://localhost:4000/api/adminInventario/" + "demo";
                        axios
                            .get(apiURL)
                            .then((res => {
                                this.admin_inventarios = res.data;
                            }))
                            .catch((error) => {
                                console.log(error);
                            });     
                
                },
             
        }
    }

        

</script> 