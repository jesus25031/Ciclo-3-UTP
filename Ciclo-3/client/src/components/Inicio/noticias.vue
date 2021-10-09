<template>
    <main>
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
        <div class="Noticias_mes">
            <div class="div1"> 
                <p>NOTICIAS DEL MES</p>
            </div>
            <br><div class="div2">
                <a href="#noticias_del_dia">
                    <img  id = "img_goToSection" src= "../../Recursos/Noticia1.jpg">
                </a>                
            </div>
            <div class="div3"> 
                <p>Gran Inauguración</p>
            </div>
            <div class="div4">
                <a href="#noticias_del_dia">
                    <img  id = "img_goToSection" src= "../../Recursos/Noticia1.jpg">
                </a>                
            </div>
            <div class="div5"> 
                <p>Proximamente</p>
            </div>
            <div class="div6">
                <a href="#noticias_del_dia">
                    <img  id = "img_goToSection" src= "../../Recursos/Noticia1.jpg">
                </a>                
            </div>
            <div class="div7"> 
                <p>Proximamente</p>
            </div>
            
            <div class="div8">
    
            </div>
    
        </div>
    </div>
         

    </main>
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
