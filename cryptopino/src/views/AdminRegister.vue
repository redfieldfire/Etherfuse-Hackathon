<template>
    <div class = "newAdmin">

        <div class="form2">
            <img src="../assets/t.webp" alt=""> <br>
            <label class="text" for="">Usuario</label><br>
            <input type="text"><br>
            <label  class="text"  for="">Contraseña</label><br>
            <input type="text"> <br>
            <label  class="text"  for="">Confirmar Contraseña</label><br>
            <input type="text"> <br>
            <router-link to = "/Administrador" >  <button class="button">Registrar Sesion</button> </router-link> <br>
            <router-link to = "/Administrador" >  <button class="button">Iniciar sesion</button> </router-link> <br>    
        </div>
       
        
    </div>
</template>

<script>
    export default {
        name: 'AdminLogin'
    }
</script>

<style>

.form{
    background-color: white;
    width: max-content;
    padding: 50px;
    margin: 30px;
    text-align: center;
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