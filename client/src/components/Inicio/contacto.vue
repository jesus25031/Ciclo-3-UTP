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
    <br><div class="card-IMI">
            <img class="main-imagen" src="../../Recursos/img2.png">

        </div><br>
		

<div class="card-contacto">
  <h2>CONTACTANOS</h2>
  <div class="row">
    <div class="col">
      <div class="form-group">
        <label>NOMBRE</label>
        <input type="text">
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label>APELLIDO</label>
        <input type="text">
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label>EMAIL</label>
        <input type="text">
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label>TELEFONO</label>
        <input type="text">
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label>TU MENSAJE</label>
        <textarea></textarea>
      </div>
    </div>

    <div class="col">
      <input type="submit" value="Enviar">
    </div>
  </div>
</div>

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

    </v-app>
</template>


<script>
export default {  
    setup() {
        
    },
}
</script>

<style scoped src= '../../Css/noticias/Footer_new.css'></style>
<style scoped src= '../../Css/contacto/Header_cont.css'></style>
<style scoped src= '../../Css/contacto/style_cont.css'></style>
