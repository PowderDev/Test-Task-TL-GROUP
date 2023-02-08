<template>
  <div class="topRow row">
    <div class="cellWrapper">
      <div class="cell">Место</div>
      <button @click="handleSort('place')" class="cellSortButton">Сортировать</button>
    </div>
    <div class="cellWrapper">
      <div class="cell">Логин</div>
      <button @click="handleSort('login')" class="cellSortButton">Сортировать</button>
    </div>
    <div class="cellWrapper">
      <div class="cell">Заказы</div>
      <button @click="handleSort('orders')" class="cellSortButton">Сортировать</button>
    </div>

    <div class="cellWrapper">
      <div class="cell">Статус</div>
      <button @click="handleSort('status')" class="cellSortButton">Сортировать</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DataRowSortField } from "../lib/types"
import { useFilters } from "../lib/useFilters"

const { setFilters, query } = useFilters()

const handleSort = (field: DataRowSortField) => {
  const currSortField = query.value.sort
  const currSortType = query.value.sortType

  if (
    !currSortField ||
    currSortField != field ||
    (currSortField == field && currSortType == "DESC")
  ) {
    setFilters({ sort: field, sortType: "ASC" })
  } else {
    setFilters({ sort: field, sortType: "DESC" })
  }
}
</script>

<style lang="scss" scoped>
.topRow {
  border-bottom: 2px solid black;
  border-top: 1px solid black;

  .cell {
    font-weight: 600;
  }
}
</style>
