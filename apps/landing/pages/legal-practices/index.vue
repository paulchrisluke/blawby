<script setup lang="ts">
import Pricing from '@/components/landing/Pricing.vue'
import Design from '@/components/landing/Design.vue'
import Logos from '@/components/landing/Logos.vue'
import FeaturePanel from '@/components/landing/FeaturePanel.vue'
import HeroProduct from '@/components/landing/HeroProduct.vue'


definePageMeta({
  layout: 'product',
})

useHead({
  title: 'Legal Practices',
})
</script>

<template>
  <div>
    <HeroProduct />
    <LandingFeatureGrid id="Features" />
    <Design id="Design" />
    <FeaturePanel id="Marketing" />
    <Pricing id="Pricing" />
    <Logos />
    <LandingCta />
  </div>
</template>
