<template>
  <header class = "left row">
    <div class = "left column">
      <label class = "rem2">Maderas Ponderosas</label>
      <label class = "rem1">Nuevo Casas Grandes, Chihuahua</label>
    </div>
    <div class="spaceW"></div>
    <div class="center row">
      <div class="center colum links">
        <router-link to = "/home" class = "rem15 center alink"> <img  src="./assets/edificios.webp" class="icono"><label> Sobre Nosotros </label>
        </router-link> 
        <router-link to = "/Historia" class = "rem15 center alink"><img  src="./assets/MPH.png"  class="icono"> <label>  Historia </label>  </router-link>
        <router-link to = "/Administrador" class = "rem15 center alink"><img src="./assets/t.webp"  class="icono"><label for=""> Admin</label>
        </router-link>
      </div>
    </div>
  </header>
  <router-view/>
  <footer class = "center column">
    <div class="center column">
      <label>Phone: +52 636 100 4828</label>
      <label>Location: <a href="https://www.google.com.mx/maps/place/Maderas+Poderosas+Casas+Grandes/@30.3784377,-107.9535968,13z/data=!4m12!1m6!3m5!1s0x86c3534872dadeb5:0xccfe521303603451!2sMaderas+Poderosas+Casas+Grandes!8m2!3d30.3266568!4d-107.9282636!3m4!1s0x86c3534872dadeb5:0xccfe521303603451!8m2!3d30.3266568!4d-107.9282636">Maderas Ponderosas</a></label>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.alink:hover{
  background-color: white;
  color: black
}
footer > div > label{
  color: white;
}
</style>
