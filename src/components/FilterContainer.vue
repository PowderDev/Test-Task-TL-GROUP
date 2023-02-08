<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  width: 100%;
}

@media screen and (max-width: 600px) {
  .container {
    flex-direction: column;
    padding: 0 30px;
  }
}
</style>
