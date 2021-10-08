<template>
    <main>
         <nav class="nav-I">
            <div class = "encabezado">
                <div class = "encabezado_logo">
                    <img class = "imagen_logo" src="../../Recursos/Logo.png">
                </div>
                <div class = "encabezado_botones_Inicio">
            <div class = "boton_inicio">
                <router-link to="/">Inicio</router-link>
            </div>
            </div>
            <div class = "encabezado_botones_Servicio" >
                <div class = "boton_servicio">
                    <router-link to="/servicios">Servicios</router-link>
                </div>  
            </div>
            <div class = "encabezado_botones_Noticias">
                <div class = "boton_noticias">
                    <router-link to="/noticias">Noticias</router-link>
                </div> 
            </div>
            <div class = "encabezado_botones_Grupo">
                <div class = "boton_grupo">
                    <router-link to="/grupo">Grupo</router-link>
                </div>
            </div>
            <div class = "encabezado_botones_Contacto" >
                <div class = "boton_contacto">
                    <router-link to="/contacto">Contacto</router-link>
                </div>
            </div>    
            <div class = "encabezado_botones_Entrar" >
                <div class = "boton_entrar">
                <router-link to="/login">Entrar</router-link>
                </div>
            </div>                    
            </div>
        </nav><br><br>

        <div class="card-IMI">
            <img class="main-imagen" src="../../Recursos/img2.png" style="width:100%">

        </div><br><br>

        <div class="box">
            <div class="content">
                <div class="icon.area">
                    <i class="fa fa-envira" ></i>
                </div>
                <h2>Gestion Inventario</h2>
                <p> Facil gestion de Inventario, uso para cualquier persona</p>
            </div>
        </div>

        <div class="box">
            <div class="content">
                <div class="icon.area">
                    <i class="fa fa-laptop" ></i>
                </div>
                <h2>Aprendizaje Rapido</h2>
                <p> Facil gestion de Inventario, uso para cualquier persona</p>
            </div>
        </div>

        <div class="box">
            <div class="content">
                <div class="icon.area">
                    <i class="fa fa-camera" ></i>
                </div>
                <h2>Control Multiusuario</h2>
                <p> Facil gestion de Inventario, uso para cualquier persona</p>
            </div>
        </div>

<footer class="footer">
        <ul>
            
            <p class="section-textF">MISION TIC 2022</p>
            <p class="section-textF">aplicación destinada al control de inventarios de pymes del sector de comercio para facilitar la gestión y administración de los productos </p>
            <p class="section-textF"><a href="https://github.com/jesus25031/Ciclo-3-UTP" target="_blank">ENLACE GITHUB</a></p>  
            
            .
      </ul>  
      <ul>    
             <p class="section-textF"> ANGIE QUINTANA @vanequina </p>
             <p class="section-textF"> BRAYAN MORENO @CoupKwon-dot</p>
             <p class="section-textF"> CRISTHIAN FERNANDEZ @cridavifer</p>
             <p class="section-textF"> JESUS VILORIA @jesus25031</p>
             

            
            
       </ul>

    </footer>   
    </main>
</template>

<script>
    import "../../Css/Inicio/Estilo.css";
    import "../../Css/Inicio/Header.css";
    

    export default{
        data(){
            return{

            }
        }   
    }
</script>
<style>
</style>

