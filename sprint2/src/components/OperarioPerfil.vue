<template>
    
    <div class="container rounded bg-white mt-5 mb-5 mr-0" >
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"><br><span class="font-weight-bold text-white">Administrador</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right text-white">Perfil Usuario</h4>
                </div>
                <div class="row mt-2 pb-3">
                    <div class="col-md-6"><label class="labels">Nombre</label><input type="text" class="form-control" placeholder="Nombre" value=""></div>
                    <div class="col-md-6"><label class="labels">Apellido</label><input type="text" class="form-control" value="" placeholder="Apellido"></div>
                </div>
                <div class="row mt-3 pb-3">
                    <div class="col-md-12"><label class="labels">Numero Contacto</label><input type="text" class="form-control" placeholder="Ingrese Numero Contacto" value=""></div>
                    <div class="col-md-12"><label class="labels">Identificacion</label><input type="text" class="form-control" placeholder="Ingrese Numero Identificacion" value=""></div>
                    <div class="col-md-12"><label class="labels">Area</label><input type="text" class="form-control" placeholder="Area Encargada" value=""></div>
                    <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="Enter email id" value=""></div>
                    
                </div>
                <div class="row mt-3 pb-3">
                    <div class="col-md-6" ><label class="labels">Pais</label><input type="text" class="form-control" placeholder="Pais" value=""></div>
                    <div class="col-md-6"><label class="labels">Ciudad</label><input type="text" class="form-control" value="" placeholder="Ciudad"></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Guardar Cambios</button></div>
                <div class="mt-3 text-center"><button class="btn btn-danger profile-button" type="button">Cancelar</button></div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-3 py-5">
            </div>
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


