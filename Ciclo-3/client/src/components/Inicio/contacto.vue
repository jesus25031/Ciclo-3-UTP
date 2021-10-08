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



    <div class="container-imagen">
        <img src="../../Recursos/img2.jpg" alt="LOGO" width="1000" height="240" opacity="0.4" filter="alpha(opacity=40)">
        <h2 class="image-text"></h2>
    </div>

        <div class="section-1A">
            


            <div class="col-3A">

                <div class="service-content">

                    <h1>
                        GESTION DE INVENTARIO
                    </h1>

		<form action="recibir.php" method="get" >
		
			<label>Nombre: <input type="text" required name="nombre" autofocus ></label><br><br>
	
			<label>Apellidos: <input type="text" placeholder="Escribe los dos apellidos" name="ape" size="25" maxlength="15"></label><br><br>

			<label>Fecha: <input type="date" name="fecha" value="2021-01-28" /></label><br><br>

			<label>Email: <input type="email" name="correo" multiple ></label><br><br>

			<label>Telefono: <input type="tel" name="telefono" /></label><br><br>

			<label> <textarea name="area" cols="40" rows="4" minlength="5" maxlength="200" >Escribenos tu opinión</textarea></label><br><br>

			<label><input type="checkbox" value="acepta" name="condiciones" cheched="checked"> Acepto condiciones</label><br><br>

			<v-btn color="error" value="Borrar">Cancelar</v-btn>

			<v-btn color="primary" value="Enviar">Enviar</v-btn>
		</form>             
                </div>
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

    </v-app>
</template>


<script>
    import "../../Css/noticias/Footer.css"
    import "../../Css/contacto/Header.css"
    import "../../Css/contacto/style.css"
    

export default {
    created(){
            this. getAdminInfo()
    },    
    setup() {
        
    },
}
</script>
