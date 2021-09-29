<template>
    <div>
        <div class="Header">
           <div class="container2">
                    <div class = "encabezado">
                        <div class = "encabezado_logo">
                            <img class = "imagen_logo" src =  "/assets/logo.png">
                        </div>

                        <div class = "encabezado_botones_Inicio">
                            <button class = "boton_inicio">
                                <a href = "inicio.html">Inicio</a>
                            </button>
                        </div>

                        <div class = "encabezado_botones_Servicio" >
                            <button class = "boton_servicio">
                                <a href = "servicios.html">Servicios </a>
                            </button>  
                        </div>

                        <div class = "encabezado_botones_Noticias">
                            <button class = "boton_noticias">
                                <a href = "noticias.html">Noticias</a>
                            </button> 
                        </div>

                        <div class = "encabezado_botones_Grupo">
                            <button class = "boton_grupo">
                                <a href = "grupo.html">Grupo</a>
                            </button>
                        </div>

                        <div class = "encabezado_botones_Contacto" >
                            <button class = "boton_contacto">
                                <a href = "contacto.html">Contacto</a>
                            </button>
                        </div>  

                        <div class = "encabezado_botones_Entrar" >
                            <button class = "boton_entrar">
                                <a href = "login.html">Entrar</a>
                            </button>
                         </div>            
                     </div>
                              
            </div> <br>

        </div>

    <div>
        <div class="form-signin">
            <div class="card">
               <div class="card-body" >
                    <form>
                        <h2 class="h3 mb-3 fw-normal text-center" >CREAR CUENTA</h2>

                        <div class="form-group">
                            <label>NOMBRE</label><br>
                            <input type="text" class="form-control form-control-lg" placeholder="Nombre"/>
                        </div><br>

                        <div class="form-group">
                            <label>APELLIDO</label><br>
                            <input type="text" class="form-control form-control-lg" placeholder="Apellido"/>
                        </div><br>

                        <div class="form-group">
                            <label>EMAIL</label><br>
                            <input type="email" class="form-control form-control-lg" placeholder="Email" />
                        </div><br>

                        <div class="form-group">
                            <label>CONTRASEÑA</label><br>
                            <input type="password" class="form-control form-control-lg" placeholder="Contraseña"/>
                        </div><br><br>                        

                        <router-link class="w-100 btn btn-lg btn-info" type="submit" to="/signin">Crear Cuenta</router-link>
                    </form>
                </div>
             </div>  
                <p class="mt-3 mb-3 text-muted text-center">© Appventario 2021</p>
        </div>    
    </div>


</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
