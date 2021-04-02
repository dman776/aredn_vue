<template>
<!-- Sidebar -->
    <nav
        id="sidebarMenu"
        class="collapse d-lg-block sidebar collapse bg-white"
        >
      <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-5">
          <router-link to="/" 
            class="list-group-item list-group-item-action py-2 ripple active"
            aria-current="true">
            <i class="fas fa-circle fa-fw me-3"></i
              ><span>Status</span>
          </router-link>
          <a
            href="#"
            class="list-group-item list-group-item-action py-2 ripple"
            >
            <i class="fas fa-project-diagram fa-fw me-3"></i
              ><span>Nodes</span>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action py-2 ripple"
            ><i class="fas fa-network-wired fa-fw me-3"></i><span>Services</span></a
            >
          <a
            href="#"
            class="list-group-item list-group-item-action py-2 ripple"
            ><i class="fas fa-chart-line fa-fw me-3"></i
            ><span>Signal Chart</span></a
            >
          <a
            href="#"
            class="list-group-item list-group-item-action py-2 ripple"
            >
            <i class="fas fa-wifi fa-fw me-3"></i><span>WiFi Scan</span>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action py-2 ripple"
            ><i class="fas fa-link fa-fw me-3"></i><span>Tunnel Client</span></a
            >
          <a
            href="#"
            class="list-group-item list-group-item-action py-2 ripple"
            ><i class="fas fa-server fa-fw me-3"></i
            ><span>Tunnel Server</span></a
            >
          <router-link to="/setup"
            class="list-group-item list-group-item-action py-2 ripple"
            ><i class="fas fa-cog fa-fw me-3"></i><span>Setup</span>
          </router-link>
          <a
            href="http://localnode.local.mesh/help.html"
            class="list-group-item list-group-item-action py-2 ripple">
            <i class="fas fa-question-circle fa-fw me-3"></i>
            <span>Help</span></a>
        </div>
      </div>
    </nav>
    <!-- Sidebar -->
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>
  
<style lang="scss" scoped>
</style>