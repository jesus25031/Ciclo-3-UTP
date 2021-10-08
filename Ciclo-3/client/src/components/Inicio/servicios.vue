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
  </nav><br><br>

        
<div class="container-cards">
  <div class="card-GI">
    <div class="cardcont">
      <a href="#">
        <img class="logoIM" src="../../Recursos/storage.svg" alt="vector Gestion Inventario">
      </a>
      <h3 class="title">Gestion De Inventarios</h3>
      <div class="description">
      <p>APPVENTARIO es la solucion que buscas si necesitas gestionar tu inventario, tu presupuesto
        no es amplio y no posees conocimientos avanzados en gestion de inventario online, Appventario te ofrece una gama
        amplia de caracteristicas como el facil manejo de usuarios, de productos, de permisos entre otras mas que
        hace que la gestion de inventario de tu negocio se haga de la mejor forma lo que hace que la productividad de tu negocio
        se vea elevada, CAMBIATE A APPVENTARIO.
      </p>
        <div class="mas">
          <a href="#">MAS INFORMACION</a>
        </div>
      </div>
    </div>       
  </div>
</div><br><br>

<div class="container-cards">
    <div class="card-IM">
      <div class="cardcont">
        <a href="#">
          <img class="logoIM" src="../../Recursos/group.svg" alt="vector Interaccion Multiusuario">
        </a>
        <h3 class="title">Interaccion Multiusuario</h3>
        <div class="description">
        <p>Una de las casracteristicas que ofrece APPVENTARIO es que su usabilidad esta pensada para un uso Multiusuario
          esto consiste en que hay un usuario administrador capaz de gestionar permisos para que sus empleados puedan tener
          acceso solo a consulta de inventarios, esto hace que no tenga que preocuparse que personas ajenas a el eliminen o modifiquen
          partes de un inventario, asi mismo esta interaccion hace que exista un chat donde empleados pueden comunicarse rapidamente con
          el administrador y viceversa.
        </p>
          <div class="mas">
            <a href="#">MAS INFORMACION</a>
          </div>
        </div>
      </div>   
    </div>
  </div><br><br>


<div class="container-cards">
    <div class="card-FU">
      <div class="cardcont">
        <a href="#">
          <img class="logoIM" src="../../Recursos/tap.svg" alt="vector utilizacion facil de inventario">
        </a>
        <h3 class="title">Facil Utiizacion Inventario</h3>
        <div class="description">
        <p>La Utiizacion de APPVENTARIO esta pensada para el facil uso lo que hace que las personas que tienen la
          responsabilidad de gestionar los inventarios de sus negocios o empresas, no necesiten un conocimiento avanzado,
          su interfaz de facil uso y aprendizaje hace que la productividad a la hora de utilizar este inventario aumente
          y no se necesite un tiempo extra en la adaptacion a la aplicacion.
        </p>
          <div class="mas">
            <a href="#">MAS INFORMACION</a>
          </div>
        </div>
      </div>   
    </div>
</div>
</main> 

</template>


<script>
    import "../../Css/Servicios/Header.css"
    import "../../Css/Servicios/Servicios.css"

  export default {
  
  }

</script>

<style>
</style>
