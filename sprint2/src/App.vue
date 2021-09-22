<template>
  <div id="app">
    <CrearCuenta msg="APPVENTARIO"/>
  </div>
</template>

<script>
import CrearCuenta from './components/CrearCuenta.vue'

export default {
  name: 'App',
  components: {
    CrearCuenta
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
  margin-right: 400px;
  margin-left: 450px;
}
</style>
