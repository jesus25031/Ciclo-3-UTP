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
                    <div class="card">
                        <img src="../../Recursos/vane.jpg" width="100" height="150">
                        <h2>
                            Angie Vanessa Quintana Arevalo
                        </h2>
                        <p>Hola! Soy estudiante de Historia interesada por la cultura de Medio Oriente y aprendiz de programación. Considero que las ciencias sociales y la programación pueden ayudarse mutuamente para lograr que el conocimiento sea más accesible para la gente </p>  
                    </div>
           
                    <div class="card">
                        <img src='../../Recursos/brayan.jpg' width="300" height="400">
                        <h2>
                            Brayan Steven Moreno Rodriguez
                        </h2>
                        <p>
                            Mucho gusto Soy Brayan Moreno, tengo 21 años, nací en Bogotá Colombia, soy tecnológo mecatronico.
Me gusta la programación porque a diferencia del mundo real, en la programación el único límite es la  imaginación.
                        </p>
                    </div>

                    <div class="card">
                        <img src="../../Recursos/cris.jpg" alt="" width="300" height="400">
    
                        <h2>
                            Cristhian David Fernandez Ramirez
                        </h2>
                        <p>
                            Ingeniero electricista de la Universidad Tecnologica de Pereira, iniciando en este mundo de la programación por ser un insumo esencial en esta nueva era tecnologica, donde la programación esta presente en todas las profesiones, se ha convertido en necesaria como las matematicas en las ciencias e ingenierias.
                        </p>
                    </div>

                    <div class="card">
                        <img src="../../Recursos/jesus.png" alt="" width="300" height="400">
    
                        <h2>
                            Jesus  Andres  Viloria  Alvarez
                        </h2>
                        <p class="service-text memebers">
                            Estudiante de Mision Tic 2021
                        </p>
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
    import "../../Css/grupo/estilosgrupo.css"
    import "../../Css/grupo/Header.css"
    import "../../Css/noticias/Footer.css"

export default{
    setup() {
        
    },
}
</script>
