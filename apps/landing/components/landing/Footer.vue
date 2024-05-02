<template>
  <footer class="bg-gray-900" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <img class="h-7" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Company name" />
          <p class="text-sm leading-6 text-gray-300">Blawby: The Best Platform for Legal Practices. Beautifully designed, fully featured, and ready to go lead generation. Scheduling, SEO, Paid Ads, Press Kits, and more!</p>
          <div class="flex space-x-6">
            <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-gray-500 hover:text-gray-400">
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">Services & Portfolio</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.solutions" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">About & Reviews</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.support" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">Industries</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.company" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">Legal</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.legal" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-xs leading-5 text-gray-400">&copy; 2024 PCL-Labs, LLC. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineComponent, h } from 'vue'

const navigation = {
  solutions: [
  { name: 'Web Development', href: '/Portfolio', current: false },
  { name: 'UI/UX Design', href: '/Portfolio', current: false },
  { name: 'Brand & Print Design', href: '/Portfolio', current: false },
  { name: 'eCommerce CRO', href: '/Portfolio', current: false },
  { name: 'Paid Advertising', href: '/Portfolio', current: false },
  { name: 'Organic Marketing', href: '/Portfolio', current: false },
  ],
  support: [
  { name: 'About', href: '/About', current: false },
  { name: 'Reviews', href: '/About', current: false },
  { name: 'UpWork', href: 'https://www.upwork.com/fl/~01e187ee4b1c5ab0a1', current: false },
    // { name: 'Documentation', href: '#' },
    // { name: 'Guides', href: '#' },
    // { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'Legal Practices', href: '/legal-practices' },
    { name: 'Healthcare', href: '/healthcare' },
    { name: 'Shopify', href: '/shopify' },
    { name: 'Logistics', href: '/logistics' },
    { name: 'Crypto', href: '/crypto' },
  ],
  legal: [
    // { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
  {
  name: 'Upwork',
  href: '#',
  icon: defineComponent({
    render: () =>
      h('svg', { fill: 'currentColor', viewBox: '0 0 397.2 226.9' }, [
        h('g', [
          h('g', [
            h('path', {
              class: 'st0',
              d: 'M282.1,0c-46.8,0-73,30.5-80.5,61.9c-8.5-16-14.8-37.4-19.7-57.3h-64.7v80.5c0,29.2-13.3,50.8-39.3,50.8S37,114.3,37,85.1l0.3-80.5H0v80.5c0,23.5,7.6,44.8,21.5,60C35.8,160.8,55.3,169,77.9,169c45,0,76.4-34.5,76.4-83.9V31c4.7,17.8,15.9,52,37.3,82l-20,113.9h37.9l13.2-80.7c4.3,3.6,8.9,6.8,13.8,9.7c12.7,8,27.2,12.5,42.2,13c0,0,2.3,0.1,3.5,0.1c46.4,0,83.3-35.9,83.3-84.4S328.5,0,282.1,0 M282.1,135.8c-28.7,0-47.7-22.2-53-30.8c6.8-54.4,26.7-71.6,53-71.6c26,0,46.2,20.8,46.2,51.2C328.3,115,308.1,135.8,282.1,135.8'
            })
          ])
        ]),
        h('g', [
          h('path', {
            class: 'st0',
            d: 'M366.5,4.3v3.2h4.5v11.3h3.5V7.5h4.5V4.3H366.5z M392.3,4.3l-3.2,9.9H389l-3.1-9.9H381v14.5h3.3V8.4h0.1 l3.1,10.4h3l3.2-10.4h0.1v10.4h3.4V4.3H392.3z'
          })
        ])
      ])
  })
},
  //   {
  //     name: 'Instagram',
  //     href: '#',
  //     icon: defineComponent({
  //       render: () =>
  //         h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
  //           h('path', {
  //             'fill-rule': 'evenodd',
  //             d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
  //             'clip-rule': 'evenodd',
  //           }),
  //         ]),
  //     }),
  //   },
  //   {
  //     name: 'X',
  //     href: '#',
  //     icon: defineComponent({
  //       render: () =>
  //         h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
  //           h('path', {
  //             d: 'M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z',
  //           }),
  //         ]),
  //     }),
  //   },
    {
      name: 'GitHub',
      href: 'https://github.com/pcl-labs',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
  //   {
  //     name: 'YouTube',
  //     href: '#',
  //     icon: defineComponent({
  //       render: () =>
  //         h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
  //           h('path', {
  //             'fill-rule': 'evenodd',
  //             d: 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z',
  //             'clip-rule': 'evenodd',
  //           }),
  //         ]),
  //     }),
  //   },
  ],
}
</script>