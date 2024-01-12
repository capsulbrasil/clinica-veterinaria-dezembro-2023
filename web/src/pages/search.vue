<script setup lang="ts">
import { AeriaButton } from "waltz-ui";
import {  AeriaInput} from "waltz-ui";

const valor = ref('');

const array = ref([])

async function makeRequest() 
{
  const response = await fetch('http://localhost:3800/getAnimalsbyDocument',{}

  );
}


</script>


<template>

  <aeria-input v-model = "valor" >Insira o documento  </aeria-input>
  <aeria-button @click="makeRequest" >Consulta </aeria-button>

  

</template>