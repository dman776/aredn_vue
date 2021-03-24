<template>
<!-- Navbar -->
    <nav
        id="main-navbar"
        class="navbar navbar-expand-lg navbar-light bg-white fixed-top"
        >
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Brand -->
        <a class="navbar-brand" href="#">
          <img
              src="../assets/aredn_logo.png"
              height="50"
              alt=""
              loading="lazy"
              />
        </a>
        <div class="navbar-node-name">{{info.node}}</div>
        <div class="navbar-node-desc">[ {{info.description}} ]</div>

        <!-- Right links -->
        <ul class="navbar-nav ms-auto d-flex flex-row">
          <!-- Notification dropdown -->
          <li class="nav-item me-3 me-lg-0">
            <a class="nav-link" href="#">
              <i class="fas fa-bell"></i>
              <span class="badge rounded-pill badge-notification bg-danger">{{alertscount}}</span>
            </a>
          </li>
          <!-- Github AREDN/aredn -->
          <li class="nav-item me-3 me-lg-0">
            <a class="nav-link" href="https://github.com/aredn/aredn">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <!-- Icon -->
          <li class="nav-item me-3 me-lg-0">
            <a class="nav-link" href="https://arednmesh.readthedocs.io/en/latest/">
              <i class="fas fa-passport"></i>
            </a>
          </li>
        </ul>
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
</template>

<script>
export default {
  name: "Navbar",
  components: [],
  created() {},
  data() {
    return {};
  },
  props: {
    info: {},
    alertscount: Number
  },
  methods: {
    
  },
};
</script>

<style lang="css" scoped>
.navbar-node-name {
  text-align: center;
  font-size: 30px;
  padding: 10px;
}
.navbar-node-desc {
  text-align: center;
  font-size: 16px;
  padding: 10px;
}
</style>