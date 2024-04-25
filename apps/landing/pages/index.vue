<script setup lang="ts">
import Pricing from '@/components/landing/Pricing.vue'
import About from '@/components/landing/About.vue'
import Logos from '@/components/landing/Logos.vue'
import FeaturePanel from '@/components/landing/FeaturePanel.vue'


definePageMeta({
  layout: 'landing',
})

useHead({
  title: 'Home',
})
</script>

<template>
  <div>
    <!-- <LandingFeatureTwoColumn /> -->

    <LandingFeatureGrid />
    <About />
    <FeaturePanel />
    <Pricing />
    <Logos />
    <LandingCta />
  </div>
</template>
