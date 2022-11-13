<template>
  <div class="home center row"></div>
</template>

<script>  
  export default {
    name: 'HomeView'
  }
</script>

<style>

  .description{

    background-color: #E6C18B;
    width: 50%;
    padding: 2%;
    color: black;
    height: 523px;

  }

  .description > p{

    font-size: 2rem;
    text-align: justify;

  }

  .home{

    gap: 50px;
    height: 770px;

    animation: gif 48s infinite step-end;
    background-image: url("../assets/1.png");

  }

  @keyframes gif{
    0%{background-image: url("../assets/2.png");}
    20%{background-image: url("../assets/3.png");}
    40%{background-image: url("../assets/1.png");}
    60%{background-image: url("../assets/2.png");}
    80%{background-image: url("../assets/3.png");}
    100%{background-image: url("../assets/1.png");}
  }

</style>
