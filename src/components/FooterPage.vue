<template>
  <footer id="footer" class="footer">
    <section class="p-4 text-light">
      <a href="https://github.com/MigguL" target="_blank" class="color p-1"
        ><font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a href="https://twitter.com/miggu99" target="_blank" class="color p-1"
        ><font-awesome-icon :icon="['fab', 'twitter']" />
      </a>
      <a
        href="https://linkedin.com/in/michał-latos-2699a0200"
        target="_blank"
        class="color p-1"
        ><font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>

      <br />
      <small class="copy">&copy; 2020, AppYa.app</small>
    </section>
  </footer>
</template>

<style scoped>
a {
  text-decoration: none;
}

a:active,
a:focus {
  outline: 0;
  border: none;
}
a:hover {
  opacity: 0.5;
  transition: 0.5s;
}

.footer {
  background-color: #4f646f;
}

.color {
  color: #f8f9fa;
  font-size: 42px;
}

.copy {
  font-size: 1em;
  cursor: initial;
}
</style>