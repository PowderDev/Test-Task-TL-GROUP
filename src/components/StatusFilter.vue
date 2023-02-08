<template>
  <FilterContainer>
    <FormField @onchange="value = $event" :defaultValue="query?.status" label="Статус" />
    <SubmitButton @click="emit('onchange', { status: value })" />
  </FilterContainer>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useFilters } from "../lib/useFilters"
import FilterContainer from "./FilterContainer.vue"
import FormField from "./FormField.vue"
import SubmitButton from "./SubmitButton.vue"

const value = ref("")
const { query } = useFilters()

type EmittedValue = { status: string }
const emit = defineEmits<(e: "onchange", value: EmittedValue) => void>()
</script>

<style scoped></style>
