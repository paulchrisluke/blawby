<template>
  <div class="flex flex-col min-h-screen">
    <LandingHeader :hideHero="true" />
    <div class="flex-1">
      <slot />
    </div>
    <LandingFooter />
  </div>
</template>
