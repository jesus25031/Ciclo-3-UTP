<template>
  <div id="App">
    <CrearCuenta msg="APPVENTARIO"/>
  </div>
  
</template>

<script>
import CrearCuenta from '@/components/CrearCuenta.vue'

export default {
  name: 'App',
  components:{
    CrearCuenta,
  }
}

</script>

<style>

  @import './assets/styles/CrearCuenta.css';
  @import "./assets/styles/Header.css";
  @import "./assets/styles/Operario_Perfil.css";
  
</style>