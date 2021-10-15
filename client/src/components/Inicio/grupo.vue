<template>
    <v-app class="body">
        <nav >
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
    </nav>
 
<div class="container">
  <div class="card-PR">
    <img src="../../Recursos/brayan.jpg" alt="Person" class="card__image">
    <p class="card__name">BRAYAN MORENO</p>
    <p class="card__text">
Soy Brayan Moreno, tengo 21 años, nací en Bogotá Colombia,<br> soy tecnológo mecatronico.
Me gusta la <br>programación porque a diferencia del mundo real,<br> en la programación el único límite es la  imaginación.
                        </p>
    
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
    <p class="card__name">JESUS VILORIA</p>
    <p class="card__text">
Soy Jesus Viloria, tengo 20 años, de Bogotá - <br>Colombia, estudiante de Administracion Publica
Y tambien amante de la programacion, es sorprendente lo <br>que unas lineas de codigo pueden crear 
                        </p>
    
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
	
</div>	

    </v-app>
</template>

<script>

export default{
    setup() {
        
    },
}
</script>

<style scoped src= '../../Css/grupo/estilos_grupo.css'></style>
<style scoped src= '../../Css/grupo/Header_grupo.css'></style>
<style scoped src= '../../Css/noticias/Footer_new.css'></style>