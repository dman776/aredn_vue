<template>
  <!--Main Navigation-->
  <header>
    <Navbar :info="info.pages.common" />
    <Sidebar />
  </header>
  <!--Main Navigation-->
  <main style="margin-top: 58px">
    <div class="container pt-4">
      <!--Section: ALERTS-->
      <section>
        <div class="row">
          <AREDNAlert
            :info="info.pages.common.alerts"
            v-show="info.pages.common.alerts.aredn !== ''"
          />
          <LOCALAlert
            :info="info.pages.common.alerts"
            v-show="info.pages.common.alerts.local !== ''"
          />
        </div>
      </section>
      <!--Section: ALERTS-->
    </div>
    <router-view></router-view>
  </main>
</template>

<script>
import { defineAsyncComponent, ref } from "vue";
// import { ref } from "vue";
// import Sidebar from "./components/Sidebar.vue";
// import Navbar from "./components/Navbar.vue";
// import AREDNAlert from "./components/common/AREDNAlert.vue";
// import LOCALAlert from "./components/common/LOCALAlert.vue";

const dataService = "http://localnode.local.mesh:8080/cgi-bin/api?common=sysinfo,alerts";

export default {
  name: "AREDNUIApp",
  components: {
    // Sidebar,
    // Navbar,
    // AREDNAlert,
    // LOCALAlert,
    Sidebar: defineAsyncComponent(() => import("./components/Sidebar.vue")),
    Navbar: defineAsyncComponent(() => import("./components/Navbar.vue")),
    AREDNAlert: defineAsyncComponent(() => import("./components/common/AREDNAlert.vue")),
    LOCALAlert: defineAsyncComponent(() => import("./components/common/LOCALAlert.vue")),
  },
  setup() {
    const info = ref();
    return { info };
  },
  methods: {
    async fetchInfo() {
      // const res = await fetch(process.env.VUE_APP_PROXY + '?common=sysinfo,alerts')
      const res = await fetch(dataService);
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.info = await this.fetchInfo();
  },
};
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: #fbfbfb;
}
@media (min-width: 991.98px) {
  main {
    padding-left: 240px;
  }
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 58px 0 0; /* Height of navbar */
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
  width: 240px;
  z-index: 600;
}

@media (max-width: 991.98px) {
  .sidebar {
    width: 100%;
  }
}
.sidebar .active {
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}
</style>
