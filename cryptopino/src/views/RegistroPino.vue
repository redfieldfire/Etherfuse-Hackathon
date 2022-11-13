<template>
    <div class="Registro">
        <div class="menu">



            <router-link to = "/Troncos" >  <button class="btnMenu">Tronco</button> </router-link> <br>
            <router-link to = "/Transportes" >  <button class="btnMenu">Transporte</button> </router-link> <br>
            <router-link to = "/ProcesosReg" >  <button class="btnMenu">Proceso</button> </router-link> <br>
            <router-link to = "/CertificadosReg" >  <button class="btnMenu">Certificado</button> </router-link> <br>
            <router-link to = "/RepisaReg" >  <button class="btnMenu">Repisa</button> </router-link> 
            <router-link to = "/Registrar" >  <button class="btnMenu">Crear nuevo Admin</button> </router-link> 
            "b
        </div>
    
    </div>
</template>

<script>

</script>

<style>
.menu{

    position: relative;
    left: 35%;
    background-color: rgba(0, 0, 0, 0.6);
    width: 50vh;
    height: 50%;
    padding: 50px;
    margin: 30px;
    text-align: center;

}

.btnMenu{

    width: 50vh;
    padding: 4px;
    margin: 10px;
    font-size: 3vh;
    border-radius: 30px;
    text-align: center;
    background-color: rgb(95, 95, 216,0.6); 
    color:white
}
</style>