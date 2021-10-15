<template>
    <v-app class="body">
            <form class="seccion-cajon"> 
                <div class="logo">
                    <img src="../../Recursos/Logo.png">
                </div>
            <div class="titulo">
                    <h1>Recupera tu cuenta</h1>
            </div>
            <div class="indicacion">       
                    <p> Ingresa tu email para buscar tu cuenta</p>
            </div>
                <div class="email">
                    <input type="email" placeholder="Email adress">
                </div>  
                <div class= "boton-cancelar">
                    <v-btn color="error">Cancelar</v-btn>
                </div>
                <div class="boton-buscar">
                    <v-btn color="primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Buscar 
                    </v-btn>            
                </div>
            </form>
            <!-- Modal -->
            <!-- <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static"  tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div class="modal-body">
                    El link para recuperar su contraseña a sido enviado a su email.
                </div>
                <div class="modal-footer">
                    <v-btn color="primary" data-bs-dismiss="modal">Aceptar</v-btn>
                </div>
            </div>
            </div>
            </div> -->
    </v-app>
</template>

<script>

    export default {

    

        // data() {
        //     return{

        //     }
        // },
    }
</script>

<style scoped src= '../../Css/login-recuperarContr/Body_login_rec.css'></style>
<style scoped src= '../../Css/login-recuperarContr/Body_login_rec.css'></style>