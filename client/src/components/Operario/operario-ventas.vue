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
        <section class="Container">
            <div class="Seccion-Carpetas">
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
                             <div id="producto"><input  type="text" placeholder=" Producto"> </div>
                             <div id="cantidad"><input  type="number" placeholder=" Cantidad"></div>
                        </div>
                        <div class="information">
                            <ul>
                                <li>Producto: ...</li>
                                <li>Precio Unidad: ###</li>
                                <li>Cantidad en Stock: ###</li>
                            </ul>
                        </div>
                        <div class="buttons">
                            <div>
                                <v-btn id="vender" color="success">Vender</v-btn>
                                <v-btn id="cancelar" color="error">Cancelar</v-btn>
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
    // import axios from "axios";

    export default {
    
    }

        

</script> 