<script setup lang="ts">
import { DashboardLayout } from 'aeria-app-layout'
import { AeriaButton } from 'waltz-ui';

const metaStore = useStore('meta')

async function searchPage() {
    window.open("http://localhost:8080/search")
    
}

</script>

<template>
  <dashboard-layout>
    <template #super>
      <aeria-icon
        v-clickable
        :icon="
          metaStore.$theme === 'dark'
            ? 'moon'
            : 'sun'
        "
        @click="metaStore.$theme === 'dark'
          ? metaStore.$actions.saveTheme('default')
          : metaStore.$actions.saveTheme('dark')

      "></aeria-icon>
      <aeria-button @click="searchPage()" >Consulte Checkin </aeria-button>
    </template>
  </dashboard-layout>
</template>

