<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">HK NUXT DOJO</NuxtLink>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/">HOME</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">ABOUT</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="btn">PRODUCTS</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>

  </div>
</template>

<style scoped>
.router-link-exact-active{
  color: #12b488;
}
</style>