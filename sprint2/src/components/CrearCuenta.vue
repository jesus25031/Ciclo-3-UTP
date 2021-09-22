<template>
    <main class="form-signin">
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
    </main>      
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            
        }
    }
</script>

<style lang="css">
    body {
        display: flex;
        padding-top: 60px;
        padding-bottom: 60px;        
        align-items: center;
        background-color: #f6f6f6;
    }
    .form-signin {
        width: 450px;
        max-width: 600px;
        margin: center;
        align-items:baseline;
        background-color: #ffffff;
        border-radius: 13px;
        box-shadow: 0rem 0rem 5rem rgb(97, 201, 233);
    }

    .card-body{
        background-color: #1f1f1f;
        border-radius: 13px;
        box-shadow: 0rem 0rem 0rem rgb(24, 114, 187);
        color: rgb(67, 255, 255);
    }
        
    label {
        font-weight: 600;
    }
</style>