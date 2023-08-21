<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <a
        class="navbar-brand user-select-none text-white mx-auto mx-lg-0"
        title="Logo"
        aria-label="Logo"
        href="#"
      >
        <img
          src="../../assets/logo.png"
          alt="Logo"
          width="50"
          height="50"
          class="d-inline-block align-text-top"
        />
        {{ brand }}
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: ["brand"],
  data() {
    return {
      logoSource: "../../assets/logo.png",
    };
  },
};
</script>

<style scoped>
.navbar {
  width: 100%;
  min-height: 50px;
  background-color: #4c0bce;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
}

.navbar-brand {
  font-size: 32px;
  font-weight: 500;
  font-style: italic;
  letter-spacing: 1px;
  line-height: 44px;
}
</style>
