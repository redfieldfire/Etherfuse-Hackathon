<template>
    <div class = "Admin">

        <div class="form2">
            <img src="../assets/t.webp" alt=""> <br>
            <label class="text" for="">Usuario</label><br>
            <input type="text"><br>
            <label  class="text"  for="">Contraseña</label><br>
            <input type="text"> <br>
            <router-link to = "/Registros" >  <button class="button">Iniciar Sesion</button> </router-link> <br>
            
        </div>
       
        
    </div>
</template>

<script>
    export default {
        name: 'AdminLogin'
    }
</script>

<style>

.form2{
   
    position: relative;
    left: 40%;
    background-color: rgba(0, 0, 0, 0.6);
    width: max-content;
    padding: 50px;
    margin: 30px;
    text-align: center;
    color: white;
}
.text{

    font-family: open sans;
    font-size: 3vh;
}
.button{

    margin: 10px;
    border-radius: 10px;
    width: max-content;
    height: max-content;
    background-color: rgb(95, 95, 216);
    color: white;
    font-size: 2vh;
    padding: 6px;
}

</style>