<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>Lorem Ipsem</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
  layout: 'products'
})
</script>

<style scoped>

</style>