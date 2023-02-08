<template>
  <FilterContainer>
    <FormField @onchange="value = $event" :defaultValue="query?.login" label="Логин" />
    <SubmitButton @click="emit('onchange', { login: value })" />
  </FilterContainer>
</template>

<script setup lang="ts">
import { ref } from "vue"
import FilterContainer from "./FilterContainer.vue"
import FormField from "./FormField.vue"
import SubmitButton from "./SubmitButton.vue"
import { useFilters } from "../lib/useFilters"

const value = ref("")
const { query } = useFilters()

type EmittedValue = { login: string }
const emit = defineEmits<(e: "onchange", value: EmittedValue) => void>()
</script>

<style scoped></style>
