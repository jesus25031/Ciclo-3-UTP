<template>
    <v-app class="body">
        <header >
            <div class = "encabezado">
                <div class = "encabezado_logo">
                    <img class = "imagen_logo" src="../Recursos/Logo.png">
                </div>
                <div class = "encabezado_botones_Inventarios">
                    <div class = "boton_inventarios">
                        <a href = "../Inventario/inventarios.html">Inventarios</a>
                    </div>
                </div>
                <div class = "encabezado_botones_Compartir" >
                    <div class = "boton_compartir">
                        <a href = "compartir.html">Compartir</a>
                    </div>  
                </div>
                <div class = "encabezado_botones_VistaOperario">
                    <div class = "boton_vistaOperario">
                        <a href = "Subpaginas/Noticias/noticias.html">Vista Operario</a>
                    </div> 
                </div>
                <div class = "encabezado_botones_Actividad">
                    <div class = "boton_actividad">
                        <a href = "Subpaginas/Grupo/grupo.html">Actividad</a>
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
                        <P>INVENTARIOS</P>
                    </div>

                    <!-- Carpeta Principal -->
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

                    <!-- Contenido de la carpeta -->
                    <div class="contenido-inventario" type="button">
                        <a > inventario1-bs</a>
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
                <div class="EditarTabla">
                    <div id="inputsTabla">
                        <div class ="Filas">   
                            <div class="tituloFilas">
                                <p>Filas:</p>
                            </div>
                            <div class="editarFilas">
                                <input  min="1" max="Infinity" type="number" value="1">
                            </div>
                        </div>  
                    </div>
                    <div class="Contenedor-boton">
                        <div class="botonGuardar">
                            <v-btn color="primary" disabled="disabled">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="100%" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16" style="margin-right:10px;">
                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                </svg>
                            Guardar</v-btn>
                        </div>                        
                    </div>
                </div>
                <div class="Tabla" style="overflow: scroll;">
                    <table class="table  table-bordered">
                        <thead class="table-dark">
                        <tr>
                            <th scope="col"><div class="columna"><p>Cédula</p></div></th>
                            <th scope="col"><div class="columna"><p>Nombre</p></div></th>
                            <th scope="col"><div class="columna"><p>Apellido</p></div></th>
                            <th scope="col"><div class="columna"><p>Email</p></div></th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="col"><input class="inputContenido" type="text" value=" xxx-xxx-xxx"></th>
                            <th scope="col"><input class="inputContenido" type="text" value=" Operador"></th>
                            <th scope="col"><input class="inputContenido" type="text" value=" NA"></th>
                            <th scope="col"><input class="inputContenido" type="text" value=" Operador@gmail.com"></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    </v-app>    
</template>



<script>
    import '../Css/administrador-compartir/Body.css'
    import '../Css/administrador-compartir/Header.css'
    import '../Css/administrador-compartir/CajonCarpetas.css'
    import '../Css/administrador-compartir/Container.css'
    import '../Css/administrador-compartir/Tabla.css'
    //   import axios from "axios";

    export default {
        data() {
        return{
            
        }
        }
    }

        

</script> 