<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/products">HK NUXT DOJO</NuxtLink>
      </nav>
    </header>

    <div>
      <slot />
    </div>

    <footer>
      <ul>
        <li>
          <NuxtLink to="/">HOME</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">ABOUT</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products">PRODUCTS</NuxtLink>
        </li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>