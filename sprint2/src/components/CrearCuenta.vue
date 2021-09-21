<template>
    <main class="form-signin">
        <div class="card">
               <div class="card-body">
                    <form>
                        <h2 class="h3 mb-3 fw-normal text-center">CREAR CUENTA</h2>

                        <div class="form-group">
                            <label>Nombre</label>
                            <input type="text" class="form-control form-control-lg" placeholder="Nombre"/>
                        </div>

                        <div class="form-group">
                            <label>Apellido</label>
                            <input type="text" class="form-control form-control-lg" placeholder="Apellido"/>
                        </div>

                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" class="form-control form-control-lg" placeholder="Email" />
                        </div>

                        <div class="form-group">
                            <label>Contraseña</label>
                            <input type="password" class="form-control form-control-lg" placeholder="Contraseña"/>
                        </div>                        

                        <router-link class="w-100 btn btn-lg btn-primary" type="submit" to="/signin">Crear Cuenta</router-link>
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
        width: 100%;
        max-width: 450px;
        margin: auto;
    }
    label {
        font-weight: 600;
    }
</style>