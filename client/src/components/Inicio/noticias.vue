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
        <div class = "cajon_noticias">
        <h2  class= "noticias_del_dia">Noticia del día</h2>
        <div class = "content_noticias">
            <div  class = "noticia_1">
                <img class = "imagen_noticia" src = "../../Recursos/Noticia1.jpg">
            </div>
            <div class = "texto_noticia">
                <div class="texto_noticia_Titulo">
                    <h3>Gran Inauguración</h3>
                </div>
                <div class="texto_noticia_info">
                    <br><h4> Prepárate</h4>
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
            </div>
        </div>
    </div>
         

    </v-app>
</template>

<script>
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
    },
    mounted(){
        this.$forceUpdate();
        
    },
}
</script>


<style scoped src= '../../Css/noticias/Body_new.css'></style>
<style scoped src= '../../Css/noticias/Footer_new.css'></style>
<style scoped src= '../../Css/noticias/Header_new.css'></style>
<style scoped src= '../../Css/noticias/SeccionNoticias.css'></style>