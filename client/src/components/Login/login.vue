<template>
  <v-app class="body">
    <div class ="Filas">   
      <div class="tituloFilas">
            <!-- <p>Filas:</p> -->
        <p>User:</p>
      </div>
      <div class="editarFilas">
        <input v-model="admin_inventarios.user" type="text">
      </div>     
    </div>

     <div class="Contenedor-boton">
        <div class="botonGuardar">
            <v-btn type="router-link" v-on:click="entrarAdmin()">Entrar Administrador</v-btn>
            <v-btn type="router-link" to="/operario/consultar">Entrar Usuario</v-btn>
            <v-btn type="router-link" v-on:click="crearAdmin(),crearAdminInventario()"  color="primary">Crear</v-btn>
            <v-btn type="router-link" v-on:click="deleteAdmin(), deleteAdminInventario() " color="primary">Eliminar</v-btn>
        </div>                        
      </div>
  </v-app>
</template>

<script>
    import axios from "axios";
    import {ed} from '../Administrador/administrador-inventario.vue';

    
    export default {
        data() {
        return{
                admin_inventarios:{
                    user:"",
                    tabla: {
                            columnas_1:
                                {filas_1:" 1x1", filas_2:" 1x2", filas_3:" 1x3"},
                            columnas_2:
                                {filas_1:" 2x1", filas_2:" 2x2", filas_3:" 2x3"},
                            columnas_3:
                                {filas_1:" 3x1", filas_2:" 3x2", filas_3:" 3x3"},
                            columnas_4:
                                {filas_1:" 4x1", filas_2:" 4x2", filas_3:" 4x3"}}

                },      
        };
            
        },
  

        methods:{

            entrarAdmin(){
                ed = "Hola nombre";
                console.log(ed);
                this.$router.push("/admin");
            },
            //Crear admin y su inventario 
            crearAdmin(){
                let query = this.admin_inventarios.user;
                let apiURL = "http://localhost:4000/api/create-admin/" + query;
                console.log(query);
                axios
                    .post(apiURL, query)
                    .then(() => {
                        // this.$router.push("/admin");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },

            crearAdminInventario(){
                let apiURL = "http://localhost:4000/api/create-adminInventario"
                axios
                    .post(apiURL, this.admin_inventarios)
                    .then(() => {
                        this.$router.push("/admin");
                        
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
            
            //Eliminar Admin e inventario
            deleteAdmin() {
                let query = this.admin_inventarios.user;
                let apiURL = 'http://localhost:4000/api/delete-admin/' + query;
            
                if (window.confirm("Do you really want to delete?")) {
                    axios
                        .delete(apiURL),
                        console.log(query + "se ha enviado usuario")
                        // .then(() => {
                        // // this.$router.push("/admin");
                        //     this.user = {
                        //     user: "",
                        //     };

                        // });
                }

            },
            deleteAdminInventario() {
                let query = this.admin_inventarios.user;
                let apiURL = 'http://localhost:4000/api/delete-adminInventario/' + query;
                    axios
                        .delete(apiURL)
                        // .then(() => {
                        // // this.$router.push("/admin");
                        //     this.user = {
                        //     user: "",
                        //     };

                        // });
            },
        },
    }

</script> 