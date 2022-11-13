<template>
    <br>
    <div class="Busqueda center column">
        <div class = "center row search">
            <a class="boton"  @click="ocultar"><img class = "actionSearch" src="../assets/search.png" alt=""></a> 
            <input class="input" type="text" placeholder = "Id">
        </div>
        <br>
        <div v-if="visible" class="center row search">
            <div>
                <img class = "mueble left " src="../assets/mueble.webp"   alt="">
            </div>
            <div class = "center row options">
                 <router-link to = "/HistoriaMed" class = "letters rem2">Historia<img  src="../assets/MPH.png"  class="action"> </router-link>
                 <a href="https://www.google.com.mx/maps/dir/30.3730399,-107.919015/Casas+Grandes,+Chihuahua/@30.3766557,-107.9500066,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x86c4b1913222ee7d:0x1991c20c3f0ffc80!2m2!1d-107.9605444!2d30.3820944!3e2" class = "letters rem2"> Recorrido <img class = "action " src="../assets/mapa.png" alt=""></a><br>
                 <router-link to = "/Procesos" class = "letters rem2">Procesos<img  src="../assets/procesos.png"  class="action"> </router-link>
                 <router-link to = "/Certificados" class = "letters rem2">Certificados<img  src="../assets/certificado.png"  class="action"> </router-link>
            </div>  
        </div>
    </div>
    <br>
</template>

<script>
    export default {
        name: 'BusquedaHistoria',
        methods:{
            //Buscar como se agregan----------------------------------
            ocultar(){
                this.visible= !this.visible;
            }
        },
        data(){
            return{
              visible:false  
            }    
        }
    }
</script>

<style>
    .Busqueda{
        gap: 20px;
        height: 700px;
    }
    .search{
        gap: 20px;
    }
    .actionSearch{
        width: 100px;
    }
    .action{
        width: 200px;
        margin: 10%;
        border-radius: 30px;
        padding: 5%;
        background-color: rgba(255, 255, 255,0.5);

        transition-duration: 0.4s;
    }
    .mueble{
        width: 500px;
        border-radius: 30px;
    }
    .input{
        background-color: white;
        border: none;
        border-radius: 50px;
        padding: 1%;
        text-align: center;
        font-size: 3rem;
        outline: none;
    }

    .options{

        gap: 20px;

    }

    .letters{

        width: 300px;
        text-decoration: none;
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 30px;

        transition-duration: 0.4s;

    }

    .letters:hover{

        width: 400px;

    }

    .letters:hover .action{

        width: 250px;

    }
</style>
