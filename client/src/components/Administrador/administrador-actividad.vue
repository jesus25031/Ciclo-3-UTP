<template>
  <v-app class="body">
     <header>
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
    <section class="container-adma" >
            <div class="seccion-Carpetas"> 
            <div class="cajon-carpetas">
                <div class="inventarios-titulo">
                    <p>INVENTARIOS</p><br>
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
            </div> 

                    <!-- Contenido de la carpeta  -->
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
            <div class="Titulo"><br>
                <p id="nameInventario">Inventario_1</p><br>
            </div>
 
            <div class="Tabla" style="overflow: scroll;">
               <br><table class="table  table-bordered"> 
                    <thead class="table-dark">
                       <tr>
                         <th scope="col"><div class="columna"><p> Fecha</p></div></th>
                         <th scope="col"><div class="columna"><p> Hora</p></div></th>
                         <th scope="col"><div class="columna"><p> Operario</p></div></th>
                        <th scope="col"><div class="columna"><p> Producto</p></div></th>
                        <th scope="col"><div class="columna"><p> Cantidad</p></div></th>
                        <th scope="col"><div class="columna"><p> Total</p></div></th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr v-for="actividad in actividades" :key="actividad.id">
                          <td scope="col"><div class="columna"><p> {{actividad.Fecha}} </p></div></td>
                          <td scope="col"><div class="columna"><p>{{actividad.Hora}}</p></div></td>
                          <td scope="col"><div class="columna"><p>{{actividad.Operario}}</p></div></td>
                          <td scope="col"><div class="columna"><p>{{actividad.Producto}}</p></div></td>
                          <td scope="col"><div class="columna"><p>{{actividad.Cantidad}}</p></div></td>
                          <td scope="col"><div class="columna"><p>{{actividad.Total}}</p></div></td>
                        </tr>
                        <tr>

                    </tbody>
                </table> 
            </div>
        </div>

    </section>
  </v-app>
</template>

<script>
    import axios from "axios";

    

    export default { 
         created(){
            this. getoperarioActividad()
        },  
        data() {
            return{
                actividades: []
                
            }

        },

        methods:{
                getoperarioActividad(){  
                    console.log("Cargando datos");
                    let apiURL = "https://agile-bastion-32260.herokuapp.com/api/actividades/demo";
                        axios
                            .get(apiURL)
                            .then((res => {
                                this.actividades = res.data;
                                console.log(this.actividades.Producto)
                            }))
                            .catch((error) => {
                                console.log(error);
                            });     
                
                },
             
        }
    }

        

</script>

<style scoped src= '../../Css/administrador-actividad/Body.css'></style>
<style scoped src= '../../Css/administrador-actividad/Header.css'></style>
<style scoped src= '../../Css/administrador-actividad/CajonCarpetas.css'></style>
<style scoped src= '../../Css/administrador-actividad/Container.css'></style>
<style scoped src= '../../Css/administrador-actividad/Tabla.css'></style>
