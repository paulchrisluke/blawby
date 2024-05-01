<script setup lang="ts">

definePageMeta({
  layout: 'portfolio',
})

useHead({
  title: 'Portfolio',
})
</script>

<template>
  <div>
    <LandingServiceGrid />
    <LandingProductListFilter />
  </div>
</template>
