<template>
<!--Main layout-->
  <main style="margin-top: 58px">
    <div class="container pt-4">
      <!--Section: ALERTS-->
      <section>
        <div class="row">
          <AREDNAlert />
          <LOCALAlert />
        </div>
      </section>
      <!--Section: ALERTS-->
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
          <div class="col-xl-3 col-sm-6 col-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 class="text-info">23292kb</h3>
                    <p class="mb-0">Free RAM</p>
                  </div>
                  <div class="align-self-center">
                    <i class="fas fa-book-open text-info fa-3x"></i>
                  </div>
                </div>
                <div class="px-md-1">
                  <div class="progress mt-3 mb-1 rounded" style="height: 7px">
                    <div
                        class="progress-bar bg-info"
                        role="progressbar"
                        style="width: 80%"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 class="text-warning">920kb</h3>
                    <p class="mb-0">Shared RAM</p>
                  </div>
                  <div class="align-self-center">
                    <i class="far fa-comments text-warning fa-3x"></i>
                  </div>
                </div>
                <div class="px-md-1">
                  <div class="progress mt-3 mb-1 rounded" style="height: 7px">
                    <div
                        class="progress-bar bg-warning"
                        role="progressbar"
                        style="width: 35%"
                        aria-valuenow="35"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 class="text-success">4068kb</h3>
                    <p class="mb-0">Buffer RAM</p>
                  </div>
                  <div class="align-self-center">
                    <i class="fas fa-mug-hot text-success fa-3x"></i>
                  </div>
                </div>
                <div class="px-md-1">
                  <div class="progress mt-3 mb-1 rounded" style="height: 7px">
                    <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style="width: 60%"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 class="text-danger">64000kb</h3>
                    <p class="mb-0">Total RAM</p>
                  </div>
                  <div class="align-self-center">
                    <i class="fas fa-map-signs text-danger fa-3x"></i>
                  </div>
                </div>
                <div class="px-md-1">
                  <div class="progress mt-3 mb-1 rounded" style="height: 7px">
                    <div
                        class="progress-bar bg-danger"
                        role="progressbar"
                        style="width: 40%"
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--Section: Info cards-->
    </div>
  </main>
  <!--Main layout-->
</template>

<script>
import AREDNAlert from "./AREDNAlert.vue";
import LOCALAlert from "./LOCALAlert.vue";
import IPAddresses from "./IPAddresses.vue";
import MeshRF from "./MeshRF.vue";
import Location from "./Location.vue";
import Performance from "./Performance.vue";
import OLSREntries from "./OLSREntries.vue";
import OLSRNodes from "./OLSRNodes.vue";
import FSRootFree from "./FSRootFree.vue";
import FSTmpFree from "./FSTmpFree.vue";


export default {
  name: "Status",
  components: {
     AREDNAlert,
     LOCALAlert,
     IPAddresses,
     MeshRF,
     Location,
     Performance,
     OLSREntries,
     OLSRNodes,
     FSRootFree,
     FSTmpFree
  },
  data() {
    return {
      info: {}
    }
  },
  methods: {
    async fetchInfo() {
      const res = await fetch('http://localnode.local.mesh:8080/cgi-bin/api?status=ip,meshrf,sysinfo,location,olsr,storage')
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