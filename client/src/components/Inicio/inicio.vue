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
                   <router-link to="/servicios"  >Servicios</router-link>
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

        </div><br>

        <div class="card-FEA">
            <h1>Funciones</h1>
        </div>

    <div class="row1-container">
    <div class="box box-down cyan">
      <h2>Busqueda Facil</h2>
      <p>Monitoria facil la busqueda de articulos, mejor control</p>
      <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="">
    </div>

    <div class="box box-down blue">
      <h2>Panel Administracion</h2>
      <p>Maneja facil el inventario con un Acceso Administrador y restringe caracteristicas para tus operarios</p>
      <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="">
    </div>

    <div class="box red">
      <h2>Plataforma Intuitiva</h2>
      <p>interfaz Amigable para mejor control</p>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="">
    </div>
    </div>
    <div class="card-FEA">
            <h1>EQUIPO</h1>
        </div>

<div class="container">
  <div class="card-PR">
    <img src="../../Recursos/brayan.jpg" alt="Person" class="card__image">
    <p class="card__name">BRAYAN</p>
    
    <ul class="social-icons">
     <li>
          <a href="#">
              <i><font-awesome-icon :icon="['fab', 'instagram']" size="3x"/></i>
          </a>
      </li>
      <li>
          <a href="#">
              <i><font-awesome-icon :icon="['fab', 'twitter']" size="3x"/></i>
          </a>
      </li>
      <li>
          <a href="#">
              <i><font-awesome-icon :icon="['fab', 'github']" size="3x"/></i>
          </a>
      </li>
    </ul>

  </div>
  <div class="card-PR">
    <img src="../../Recursos/jesus.jpg" alt="Person" class="card__image">
    <p class="card__name">JESUS</p>
    
    <ul class="social-icons">
     <li>
          <a href="#">
              <i><font-awesome-icon :icon="['fab', 'instagram']" size="3x"/></i>
          </a>
      </li>
      <li>
          <a href="#">
              <i><font-awesome-icon :icon="['fab', 'twitter']" size="3x"/></i>
          </a>
      </li>
      <li>
          <a href="#">
              <i><font-awesome-icon :icon="['fab', 'github']" size="3x"/></i>
          </a>
      </li>
    </ul>
  </div>
    
  </div><br><br>

 <footer class="footer">
            <ul>
                
                <p class="section-textF">MISION TIC 2022</p>
                <p class="section-textF">aplicación destinada al control de inventarios de pymes del sector de comercio para facilitar la gestión y administración de los productos </p>
            </ul>  
            <ul>    
                 <br><p class="section-textF"> BRAYAN MORENO @CoupKwon-dot</p>
                 <p class="section-textF"> JESUS VILORIA @jesus25031</p> 
                
           </ul>    
       </footer>  
    </main>
</template>

<script >
    export default{
        data(){
            return{

            }
        },

    }
</script>
<style  scoped>
    @import "../../Css/Inicio/Estilo_inicio.css";
    @import "../../Css/Inicio/Header_inicio.css";
</style>

