<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">HK NUXT DOJO</NuxtLink>
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
          <a href="/about">normal link- about page</a>
        </ul>
      </nav>
    </header>

    <div>
      <slot />
    </div>

  </div>
</template>

<style scoped>
.router-link-exact-active{
  color: #12b488;
}
</style>