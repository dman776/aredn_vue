<template>
<!--Main layout-->
  <main>
    <div class="container pt-1">
      <!--Section: Info cards-->
      <section>
        <div class="row">
          <IPAddresses :info="info.pages.status.ip" />
          <MeshRF :info="info.pages.status.meshrf" />
          <Location :info="info.pages.status.location" />
          <Performance :info="info.pages.status.sysinfo" />
        </div>
        <div class="row">
          <FSRootFree :info="info.pages.status.storage" />
          <FSTmpFree :info="info.pages.status.storage" />
          <OLSREntries :info="info.pages.status.olsr" />
          <OLSRNodes :info="info.pages.status.olsr" />
        </div>
        <div class="row">
          <SystemInfo :info="info.pages.status.sysinfo" />
          <Memory :info="info.pages.status.memory" />
        </div>
      </section>
      <!--Section: Info cards-->
    </div>
  </main>
  <!--Main layout-->
</template>

<script>
import IPAddresses from "./IPAddresses.vue";
import MeshRF from "./MeshRF.vue";
import Location from "./Location.vue";
import Performance from "./Performance.vue";
import OLSREntries from "./OLSREntries.vue";
import OLSRNodes from "./OLSRNodes.vue";
import FSRootFree from "./FSRootFree.vue";
import FSTmpFree from "./FSTmpFree.vue";
import SystemInfo from "./SystemInfo.vue";
import Memory from "./Memory.vue";


export default {
  name: "Status",
  components: {
     IPAddresses,
     MeshRF,
     Location,
     Performance,
     OLSREntries,
     OLSRNodes,
     FSRootFree,
     FSTmpFree,
     SystemInfo,
     Memory
  },
  data() {
    return {
      info: {}
    }
  },
  methods: {
    async fetchInfo() {
      const res = await fetch('http://localnode.local.mesh:8080/cgi-bin/api?status=alerts,ip,meshrf,sysinfo,location,olsr,storage,memory')
      // const res = await fetch(document.location.origin + '/cgi-bin/api?status=alerts,ip,meshrf,sysinfo,location,olsr,storage')
      const data = await res.json()
      return data
    }
  },
  async created() {
    this.info = await this.fetchInfo()
    // console.log(this.info['pages']['status']['ip']['wan'])
  }
};
</script>

<style lang="scss" scoped></style>