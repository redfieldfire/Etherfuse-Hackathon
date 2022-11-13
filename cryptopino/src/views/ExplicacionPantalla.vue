<template>
    <br>
    <div class = "Explicacion center column">
        <video src="../assets/Giflogo.mp4" loop = true autoplay ></video>
        <br>
        <div class = "center row container">
            <a class = "docs" href="https://drive.google.com/file/d/16gRIxHxkndI272UX_VMiOR9DPqaApqnn/view?usp=sharing">Diagrama de flujo</a>
            <a class = "docs" href="https://drive.google.com/file/d/16THe6dNdB3X1wnOdfKS6SYYbvxFr8UL0/view?usp=sharing">Base de datos</a>
            <a class = "docs" href="https://explorer.solana.com/address/48jHqeGTLgoPL87634G8PANGwvnSATavvXEnAKstUpSF?cluster=devnet">SmartContract   Solana Devnet</a>
            <a class = "docs" href="https://www.canva.com/design/DAFRm8Tmkn0/Y2RoY_yflV4IVmzgAGVcPw/view?utm_content=DAFRm8Tmkn0&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent">Canva Proyecto Explicado</a>
            <a class = "docs" href="https://docs.google.com/document/d/13yLXxk7z3yRT8nJF2SNkNBfT-esJ1SqU/edit?usp=sharing&ouid=109946452045820481734&rtpof=true&sd=true">Word Proyecto Explicado</a>
            <a class = "docs" href="https://www.canva.com/design/DAFR16_TfWo/JouOxSdMT5eGwRFJFl2Iwg/watch?utm_content=DAFR16_TfWo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelinkt">Video Presentado</a>
        </div>
    </div>
    <br>
</template>

<script>
    export default{
        name: "ExplicacionPantalla"
    }
</script>

<style>

    .Explicacion{

        gap: 20px;

    }

    video{
        width: 50%;
        border-radius: 100px;
    }

    .docs{
        width: 300px;
        background-color: white;
        padding: 1%;
        color: green;
        font-size: 2rem;
        border-radius: 30px;
        text-decoration: none;

        transition-duration: 0.4s;
    }

    .docs:hover{
        width: 300px;
        background-color: green;
        padding: 1%;
        color: white;
        font-size: 2rem;
        border-radius: 30px;
        text-decoration: none;
    }

    .container{
        gap: 20px;
    }

</style>