<script setup lang="ts">

definePageMeta({
  layout: 'about',
})

useHead({
  title: 'About',
})
</script>

<template>
  <div>
    <LandingStats />
    <LandingReviews />
    <LandingTeam />
    <LandingCtaFull />
  </div>
</template>
