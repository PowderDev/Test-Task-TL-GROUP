<template>
  <div class="root">
    <select @change="filter = ($event.target as any)!.value">
      <option value="loginFilter">Фильтр по Логину</option>
      <option value="ordersFilter">Фильтр по Заказам</option>
      <option value="statusFilter">Фильтр по Статусу</option>
    </select>
    <LoginFilter @onchange="setFilters($event)" v-if="filter == 'loginFilter'" />
    <OrdersFilter @onchange="setFilters($event)" v-if="filter == 'ordersFilter'" />
    <StatusFilter @onchange="setFilters($event)" v-if="filter == 'statusFilter'" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { SelectFilter } from "../lib/types/filters"
import LoginFilter from "./LoginFilter.vue"
import StatusFilter from "./StatusFilter.vue"
import OrdersFilter from "./OrdersFilter.vue"
import { useFilters } from "../lib/useFilters"

const filter = ref<SelectFilter>("loginFilter")

const { setFilters } = useFilters()
</script>

<style lang="scss" scoped>
.root {
  width: 100%;
  margin-bottom: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

select {
  padding: 8px 12px;
  font-weight: 600;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  margin-top: 16px;
  margin-right: 15px;
}

@media screen and (max-width: 600px) {
  .root {
    flex-direction: column;
    width: 100vw;
    justify-content: flex-start;
    margin-bottom: 50px;
  }

  select {
    margin-right: 0;
    margin-top: 0;
  }
}
</style>
