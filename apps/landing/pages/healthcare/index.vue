<script setup lang="ts">

definePageMeta({
  layout: 'product',
})

useHead({
  title: 'Healthcare',
})
</script>

<template>
  <div>
    <LandingHeroProduct />
    <LandingFeatureGrid id="Features" />
    <LandingDesign id="Design" />
    <LandingFeaturePanel id="Marketing" />
    <LandingPricing id="Pricing" />
    <LandingLogos />
    <LandingCta />
  </div>
</template>
