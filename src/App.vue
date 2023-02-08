<script setup lang="ts">
import Table from "./components/Table.vue"
import Filters from "./components/Filters.vue"
</script>

<template>
  <div class="container">
    <Filters />
    <Table />
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

@media screen and (max-width: 600px) {
  .container {
    align-items: flex-start;
    width: 100vw;
    max-width: 100vw;
  }
}
</style>
