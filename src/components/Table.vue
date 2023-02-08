<template>
  <div class="table">
    <TopRow />

    <div v-for="row in filteredData" class="row">
      <div class="cell">{{ row.place }}</div>
      <div class="cell">{{ row.login }}</div>
      <div class="cell">{{ row.orders }}</div>
      <div class="cell">{{ row.status }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFilters } from "../lib/useFilters"
import TopRow from "./TopRow.vue"
const { filteredData } = useFilters()
</script>

<style lang="scss">
.row {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(4, minmax(50px, 1fr));
  border: 1px solid black;
  border-top: none;
}

.cell {
  padding: 8px 12px;
  text-align: center;
  display: grid;
  place-items: center;
  border-right: 1px solid black;

  &:nth-of-type(4) {
    border-right: none;
  }
}

.cellWrapper {
  position: relative;

  &:nth-of-type(4) {
    .cell {
      border-right: none;
    }
  }
}

.cellSortButton {
  position: absolute;
  top: -60%;
  left: 50%;
  transform: translateX(-50%);
}

@media screen and (max-width: 600px) {
  .table {
    white-space: nowrap;
  }

  .cell {
    word-wrap: break-word;
    word-break: break-all;
    white-space: break-spaces;
  }
}
</style>
