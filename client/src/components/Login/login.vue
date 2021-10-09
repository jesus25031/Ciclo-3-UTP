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
                    <p id="text_indicacion">Escoge tu rol y digita la contraseña</p>
            </div>
            <div class= "botones">
                <div>
                        <v-btn id="boton_admin" @click="focus_boton_admin">Administrador</v-btn>
                        <v-btn id="boton_operario" @click="focus_boton_operario">Operario</v-btn>
                </div>                 
            </div> 
            <div class="password">
                    <input id="password" type="password" placeholder=" Constraseña"> 
                     <v-btn class="mx-2" fab id="button_show" @click="contraseña()">
                             <v-icon dark>mdi-eye</v-icon>
                     </v-btn> 
            </div>  
            <div class="boton_entrar">
                    <v-btn @click="autenticar()" rounded id="entrar" >Entrar</v-btn>
            </div>
                    
               
        </form>
    </main>
</template>

<script>
    import "../../Css/login/Body.css"
    import "../../Css/login/Cajon_Contenido.css"
    import axios from "axios";
    
    export default {
      methods:{
              autenticar(){
                      let password = document.getElementById("password").value

                      let boton_admin = document.getElementById("boton_admin")
                      let elementStyle = window.getComputedStyle(boton_admin);
                      let elementColor_admin = elementStyle.getPropertyValue('background-color');

                
                      let boton_operario = document.getElementById("boton_operario")
                      let elementStyle_operario = window.getComputedStyle(boton_operario);
                      let elementColor_operario = elementStyle_operario.getPropertyValue('background-color');  

                      if(password == "admin" &&  elementColor_admin == "rgb(76, 175, 80)"){  
                              axios
                                this.$router.push("/admin");
                      
                      } else if (password != "admin" &&  elementColor_admin == "rgb(76, 175, 80)"){
                             let text = document.getElementById("text_indicacion")

                                text.innerHTML = "Contraseña Incorrecta"
                                text.style.color = "red"
                                text.style.fontWeight = "bold"
                      
                      }else if(password == "operario" &&  elementColor_operario == "rgb(76, 175, 80)"){
                              axios
                                this.$router.push("/operario");
                      
                      }else if(password != "operario" &&  elementColor_operario == "rgb(76, 175, 80)"){
                               let text = document.getElementById("text_indicacion")

                                text.innerHTML = "Contraseña Incorrecta"
                                text.style.color = "red"
                                text.style.fontWeight = "bold"
                              
                      }



              },
              contraseña(){
                      let pass = document.getElementById("password")
                        let type = pass.getAttribute("type")
                      
                      if (type == "password"){
                              pass.setAttribute("type", "text")
                      }else {
                              pass.setAttribute("type", "password")
                      }

              },

              focus_boton_operario(){
                      let boton_operario = document.getElementById("boton_operario")
                        let boton_admin = document.getElementById("boton_admin")

                        boton_operario.style.backgroundColor = "rgb(76,175,80)"
                        boton_operario.style.fontWeight = "bold"
                        boton_admin.style.backgroundColor = "rgb(235, 235, 235)"
                        boton_admin.style.fontWeight = "inherit"
              },
              focus_boton_admin(){
                      let boton_operario = document.getElementById("boton_operario")
                        let boton_admin = document.getElementById("boton_admin")

                        boton_admin.style.backgroundColor = "rgb(76,175,80)"
                        boton_admin.style.fontWeight = "bold"
                        boton_operario.style.backgroundColor = "rgb(235, 235, 235)"
                        boton_operario.style.fontWeight = "inherit"
              }
      }
      
    }

</script> 