<script setup lang="ts">

definePageMeta({
  layout: 'landing',
})

useHead({
  title: 'Home',
})
</script>

<template>
  <div>
    <LandingServiceGrid />
    <LandingProductList />
    <LandingStats />
    <LandingReviews />
    <LandingTeam />
    <LandingCtaFull />
  </div>
</template>
