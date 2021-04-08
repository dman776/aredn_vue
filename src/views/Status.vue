<template>
  <!--Main layout-->
  <div class="container pt-1">
    <!--Section: Info cards-->
    <section>
      <div class="row">
        <IPAddresses :info="info.pages.status.ip"></IPAddresses>
        <MeshRF :info="info.pages.status.meshrf" />
        <Location :info="info.pages.status.location" />
        <Performance :info="info.pages.status.sysinfo" />
      </div>
      <div class="row">
        <OLSREntries :info="info.pages.status.olsr" />
        <OLSRNodes :info="info.pages.status.olsr" />
        <FSRootFree :info="info.pages.status.storage" />
        <FSTmpFree :info="info.pages.status.storage" />
      </div>
      <div class="row">
        <SystemInfo :info="info.pages.status.sysinfo" />
        <Memory :info="info.pages.status.memory" />
      </div>
    </section>
    <!--Section: Info cards-->
  </div>
  <!-- Main layout-->
</template>

<script>
import { ref } from "vue";

const dataService =
  "http://localnode.local.mesh:8080/cgi-bin/api?status=alerts,ip,meshrf,sysinfo,location,olsr,storage,memory";

import IPAddresses from "../components/IPAddresses.vue";
import MeshRF from "../components/MeshRF.vue";
import Location from "../components/Location.vue";
import Performance from "../components/Performance.vue";
import OLSREntries from "../components/OLSREntries.vue";
import OLSRNodes from "../components/OLSRNodes.vue";
import FSRootFree from "../components/FSRootFree.vue";
import FSTmpFree from "../components/FSTmpFree.vue";
import SystemInfo from "../components/SystemInfo.vue";
import Memory from "../components/Memory.vue";

export default {
  name: "status",
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
    Memory,
  },
  setup() {
    const info = ref();
    return { info };
  },
  methods: {
    async fetchInfo() {
      //const res = await fetch(process.env.VUE_APP_PROXY + '?status=alerts,ip,meshrf,sysinfo,location,olsr,storage,memory')
      // const res = await fetch(document.location.origin + '/cgi-bin/api?status=alerts,ip,meshrf,sysinfo,location,olsr,storage')
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

<style scoped></style>
