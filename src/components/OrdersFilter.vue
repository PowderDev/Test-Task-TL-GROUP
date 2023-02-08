<template>
  <FilterContainer>
    <FormField @onchange="value.from = $event" :default-value="query.from" label="От" />
    <FormField @onchange="value.to = $event" :default-value="query.to" label="До" />
    <SubmitButton @click="emit('onchange', value)" />
  </FilterContainer>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { DataRowFilters } from "../lib/types/filters"
import { useFilters } from "../lib/useFilters"
import FilterContainer from "./FilterContainer.vue"
import FormField from "./FormField.vue"
import SubmitButton from "./SubmitButton.vue"

const value = reactive({ from: "", to: "" })
const { query } = useFilters()

type EmittedValue = Pick<DataRowFilters, "from" & "to">
const emit = defineEmits<(e: "onchange", value: EmittedValue) => void>()
</script>

<style scoped></style>
