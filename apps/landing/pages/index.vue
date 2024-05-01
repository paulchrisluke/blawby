<script setup lang="ts">
import Pricing from '@/components/landing/Pricing.vue'
import Design from '@/components/landing/Design.vue'
import Logos from '@/components/landing/Logos.vue'
import FeaturePanel from '@/components/landing/FeaturePanel.vue'
import ServiceGrid from '@/components/landing/ServiceGrid.vue'
import ProductList from '@/components/landing/ProductList.vue'
import Reviews from '@/components/landing/Reviews.vue'
import Stats from '@/components/landing/Stats.vue'
import Team from '@/components/landing/Team.vue'
import CtaFull from '@/components/landing/CtaFull.vue'



definePageMeta({
  layout: 'landing',
})

useHead({
  title: 'Home',
})
</script>

<template>
  <div>
    <ServiceGrid id="Services" />
    <ProductList id="Products" />
    <Stats id="Stats" />
    <Reviews />
    <Team />
    <!-- <Design id="Design" /> -->
    <!-- <FeaturePanel id="Marketing" />
    <Pricing id="Pricing" />
    <Logos /> -->
    <CtaFull />
  </div>
</template>
