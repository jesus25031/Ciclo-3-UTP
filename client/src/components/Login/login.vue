<template>
    <main>
        <form class="seccion-cajon"> 
                <div class="logo">
                    <img src="../../Recursos/Logo.png">
                </div>
            <div class="titulo">
                    <h1>Iniciar Sesión</h1>
            </div>
            <div class="indicacion">       
                    <p>Escoge tu rol y digita la contraseña</p>
            </div>
            <div class= "boton-administrador">
                    <v-btn @click="$router.push('/admin')">Administrador</v-btn>
            </div>
            <div class="boton-operario">
                    <v-btn @click="$router.push('/operario')">Operario</v-btn>            
            </div>  
            <div class="password">
                    <input type="password" placeholder=" Constraseña">
            </div>  
               
            </form>
    </main>
</template>

<script>
    import "../../Css/login/Body.css"
    import "../../Css/login/Cajon_Contenido.css"

    
    export default {
      
    }

</script> 