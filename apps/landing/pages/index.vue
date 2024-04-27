<script setup lang="ts">
import Pricing from '@/components/landing/Pricing.vue'
import Design from '@/components/landing/Design.vue'
import Logos from '@/components/landing/Logos.vue'
import FeaturePanel from '@/components/landing/FeaturePanel.vue'
// import Reviews from '@/components/landing/Reviews.vue'


definePageMeta({
  layout: 'landing',
})

useHead({
  title: 'Home',
})
</script>

<template>
  <div>
    <LandingFeatureGrid id="Features" />
    <Design id="Design" />
    <FeaturePanel id="Marketing" />
    <Pricing id="Pricing" />
    <Logos />
    <!-- <Reviews /> -->
    <LandingCta />
  </div>
</template>
