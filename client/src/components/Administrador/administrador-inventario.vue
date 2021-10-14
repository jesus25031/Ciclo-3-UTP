<template>
  <main>
     <header >
        <div class = "encabezado-adm"  >
            <div class = "encabezado_logo">
                <img class = "imagen_logo" src="../../Recursos/Logo.png">
            </div>
            <div class = "encabezado_botones_Inventarios">
                <div class = "boton_inventarios">
                     <router-link to="/admin">Inventarios</router-link>
                </div>
            </div>
            <div class = "encabezado_botones_Compartir" >
                <div class = "boton_compartir">
                     <router-link to="/admin/compartir">Compartir</router-link>
                </div>  
            </div>

            <div class = "encabezado_botones_Actividad">
                <div class = "boton_actividad">
                     <router-link to="/admin/actividad">Actividad</router-link>
                </div>
            </div> 
            <div class = "encabezado_botones_Salir" >
                <div class = "boton_salir">
                     <router-link to="/">Salir</router-link>
                </div>
            </div>            
        </div>
    </header> 
    <section class="container-inv" >
            <div class="Seccion-Carpetas"> 
            <div class="cajon-carpetas">
                <div class="inventarios-titulo">
                    <p>INVENTARIOS</p>
                </div>

                     <!-- Carpeta Principal  -->
                <div class="boton-inventario">
                    <div>
                        <div id="openFolder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-badge" viewBox="0 0 16 16">
                                <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"/>
                              </svg>
                        </div>  
                        <p>
                            Administrador
                        </p> 
                    </div>
                        <div id="newFolder" type="button" style="display:none">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-plus" viewBox="0 0 16 16">
                            <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z"/>
                            <path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/>
                          </svg>
                    </div>
                    <div id="newFile" type="button" style="display:none">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
                            <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
                            <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                          </svg>
                    </div>      
                    
                </div> 

                    <!-- Contenido de la carpeta  -->
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
        <div class="seccion-Tabla">
            <div class="Titulo">
                <p id="nameInventario">Inventario_1</p><br>
            </div>
            <br><div class="EditarTabla">
                <div id="inputsTabla">
                    <div class="Columnas">
                        <div class="tituloColumnas">
                            <p>Columnas: 4</p>
                        </div>
                        <div class="editarColumnas">

                        </div> 
                    </div>
                    <div class ="Filas">   
                        <div class="tituloFilas">
                            <p> Filas: 6 </p>
                        </div>
                        <div class="editarFilas">

                        </div>     
                    </div>
                    
                </div>
                <div class="Contenedor-boton">
                    <div class="botonGuardar">
                         <v-btn 
                                color="info"
                                v-on:click="actualizarAdminInventario()">Guardar
                         </v-btn>
                    </div>                        
                </div>
            </div>
            <div class="Tabla" style="overflow: scroll;">
               <table class="table  table-bordered"> 
                    <thead class="table-dark">
                       <tr>
                        <th scope="col"><p>Producto</p></th>
                        <th scope="col"><p>Precio Unidad</p></th>
                        <th scope="col"><p>Cantidad en Stock</p></th>
                        <th scope="col"><p>Ubicación </p></th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_1.filas_2" ></th>
                          <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_2.filas_2" ></th>
                          <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_3.filas_2" ></th>
                          <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_4.filas_2" ></th>
                        </tr>
                        <tr>
                            <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_1.filas_3" ></th>
                          <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_2.filas_3" ></th>
                          <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_3.filas_3" ></th>
                          <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_4.filas_3" ></th>
                        </tr>
                        <tr>
                         <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_1.filas_4" ></th>
                          <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_2.filas_4" ></th>
                          <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_3.filas_4" ></th>
                          <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_4.filas_4" ></th>
                        </tr>
                        <tr>
                            <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_1.filas_5" ></th>
                          <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_2.filas_5" ></th>
                          <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_3.filas_5" ></th>
                          <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_4.filas_5" ></th>
                        </tr>
                        <tr>
                             <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_1.filas_6" ></th>
                          <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_2.filas_6" ></th>
                          <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_3.filas_6" ></th>
                          <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_4.filas_6" ></th>
                        </tr>
                        <tr>
                                 <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_1.filas_7" ></th>
                          <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_2.filas_7" ></th>
                          <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_3.filas_7" ></th>
                          <th scope="col"><input class="inputContenido" type="text" v-model="admin_inventarios.tabla.columnas_4.filas_7" ></th>
                        </tr>
                    </tbody>
                </table> 
            </div>
        </div>

    </section>
  </main>
</template>

<script>
    import '../../Css/administrador-inventario/Body.css';
    import '../../Css/administrador-inventario/Header.css';
    import '../../Css/administrador-inventario/CajonCarpetas.css';
    import '../../Css/administrador-inventario/Container.css';
    import '../../Css/administrador-inventario/Tabla.css';
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
                                {filas_1:" Columna 1", filas_2:" ", filas_3:" ", filas_4:" ", filas_5:" ", filas_6:" ", filas_7:" "},
                            columnas_2:
                                {filas_1:" Columna 1", filas_2:" ", filas_3:" ", filas_4:" ", filas_5:" ", filas_6:" ", filas_7:" "},
                            columnas_3:
                                {filas_1:" Columna 1", filas_2:" ", filas_3:" ", filas_4:" ", filas_5:" ", filas_6:" ", filas_7:" "},
                            columnas_4:
                                {filas_1:" Columna 1", filas_2:" ", filas_3:" ", filas_4:" ", filas_5:" ", filas_6:" ", filas_7:" "}}

                }, 
            };
        },

        methods:{
            //Crear inventario             
            crearAdminInventario(){
                this.admin_inventarios.archivo_name = document.getElementById("nameInventario").textContent;
                let apiURL = "https://agile-bastion-32260.herokuapp.com/api/create-adminInventario";
                axios
                    .post(apiURL, this.admin_inventarios)
                    console.log("creado")
            },

            // Obtener datos de usuario 
            getAdminInfo(){  
                console.log("Cargando datos");
                let apiURL = "https://agile-bastion-32260.herokuapp.com/api/adminInventario/" + "demo";
                    axios
                        .get(apiURL)
                        .then((res) => {
                            this.admin_inventarios = res.data;
                        })
                        .catch((error) => {
                            console.log(error);
                        });     
            },
             
            //Actualizar Inventario
            actualizarAdminInventario() {
                let query = this.admin_inventarios.user;
                let apiURL = 'https://agile-bastion-32260.herokuapp.com/api/update-admin-Inventario/' + query;
                    
                    axios
                        .put(apiURL, this.admin_inventarios)
                        // .then(() => {
                        // // this.$router.push("/admin");
                        //     this.user = {
                        //     user: "",
                        //     };

                        // });
            },
            //Eliminar Inventario
             deleteAdminInventario() {
                let query = "demo"
                let apiURL = 'https://agile-bastion-32260.herokuapp.com/api/delete-adminInventario/' + query;
                    axios
                        .delete(apiURL)
                        // .then(() => {
                        // // this.$router.push("/admin");
                        //     this.user = {
                        //     user: "",
                        //     };

                        // });
            },
        }
        

    }
        

</script> 

