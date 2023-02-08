<template>
  <div class="field">
    <label>{{ props.label }}</label>
    <input
      @change="emit('onchange', ($event.target as any).value)"
      :defaultValue="defaultValue"
      type="text"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: { type: String, required: true },
  defaultValue: { type: String },
})

const emit = defineEmits<(e: "onchange", val: string) => void>()
</script>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  width: 100%;
}

input {
  padding: 8px 12px;
  font-size: 14px;
  width: 100%;
}

@media screen and (max-width: 600px) {
  .field {
    margin-right: 0;
  }
}
</style>
