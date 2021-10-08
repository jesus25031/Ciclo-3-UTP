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

    <div id= "noticias_del_dia" class = "cajon_noticias">
        <h2  class= "noticias_del_dia">Noticias del día</h2>
        <div class = "content_noticias">
            <div  class = "noticia_1">
                <img class = "imagen_noticia" src = "../../Recursos/Noticia1.jpg">
            </div>
            <div class = "texto_noticia">
                <Div class="texto_noticia_Titulo">
                    <h3>Gran Inauguración</h3>
                </Div>
                <div class="texto_noticia_info">
                    <h4> Prepárate</h4>
                    <p> 
                        ¡¡Este 10 de octubre se lanzará la version beta de nuestra página web. !!
                    </p>      
                    <p>
                        AppVentarios se diseño con el fin de agilizar y administrar los inventarios dentro de una pyme. 
                    </p>
                    <p>
                        - Es importante que tengas el control de tus inventarios para no generar inconvenientes o tener imprevistos en los registros financieros (Gastos, costos, consumo). 
                    </p>
                    <p>
                        - Lleva la trazabilidad de tus gastos, de los costos y del consumo de tus productos.
                    </p>
                    <p> 
                        - Ten tus Inventarios actualizados en tiempo real y mira la actividad que se ha hecho en tu tienda.
                    </p>
                </div>
                <div class="texto_noticia_interacción">
                    <img  id="unlike" v-on:click="changeImage()" src = "../../Recursos/Icon_unlike.png">
                </div>
                <div class="texto_noticia_reconocimiento">
                    <a id="link" href="https://www.freepik.es/vectores/tiempo">Vector de Tiempo creado por stories - www.freepik.es</a>
                </div>
                
            </div>
        </div>
        <div class="Noticias_mes">
            <div class="div1"> 
                <p>Noticias del mes de Septiembre</p>
            </div>
            <div class="div2">
                <a href="#noticias_del_dia">
                    <img  id = "img_goToSection" src= "../../Recursos/Noticia1.jpg">
                </a>                
            </div>
            <div class="div3"> 
                <p>Gran Inauguración</p>
            </div>
            <div class="div4">
                <p></p>
            </div>
            <div class="div5">
    
            </div>
            <div class="div6">
    
            </div>
            <div class="div7">
    
            </div>
            <div class="div8">
    
            </div>
    
        </div>
        <footer class="footer">
            <ul>
                
                <p class="section-textF">MISION TIC 2022</p>
                <p class="section-textF">aplicación destinada al control de inventarios de pymes del sector de comercio para facilitar la gestión y administración de los productos </p>
                <p class="section-textF"><a href="https://github.com/jesus25031/Ciclo-3-UTP" target="_blank">ENLACE GITHUB</a></p>  
                

            </ul>  
            <ul>    
                 <p class="section-textF"> ANGIE QUINTANA @vanequina </p>
                 <p class="section-textF"> BRAYAN MORENO @CoupKwon-dot</p>
                 <p class="section-textF"> CRISTHIAN FERNANDEZ @cridavifer</p>
                 <p class="section-textF"> JESUS VILORIA @jesus25031</p> 
           </ul>    
       </footer>
    </div>
    </v-app>
</template>

<script>
    import "../../Css/noticias/Body.css"
    import "../../Css/noticias/Footer.css"
    import "../../Css/noticias/Header.css"
    import "../../Css/noticias/SeccionNoticias.css"

export default{
    setup() {
        
    },
    methods:{
        changeImage() {
        var image = document.getElementById('unlike');
        if(image.src.match("Recursos/Icon_unlike.png")){
            image.src = "Recursos/Icon_like.png"
        }else{
            image.src = "Recursos/Icon_unlike.png"
        }

}
    }
}
</script>
