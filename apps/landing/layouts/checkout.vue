<template>
  <div class="flex flex-col min-h-screen">
    <LandingNav />
    <LandingCheckout />
    <div class="flex-1">
      <slot />
    </div>
    <LandingFooter />
  </div>
</template>
