<template>
<!--Main layout-->
  <main style="margin-top: 58px">
    <div class="container pt-4">
      <!--Section: ALERTS-->
      <section>
        <div class="row">
          <div class="col-xl-6 col-md-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between p-md-1">
                  <div class="d-flex flex-row">
                    <div class="align-self-center">
                      <i class="fas fa-exclamation-triangle text-danger fa-3x me-4"></i>
                    </div>
                    <div>
                      <h4>AREDN<br />Alert</h4>
                    </div>
                  </div>
                  <div class="align-self-center">
                    <p class="mb-0">A new vulnerability in FOO has been discovered.   Upgrade your FOO immediately!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-md-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between p-md-1">
                  <div class="d-flex flex-row">
                    <div class="align-self-center">
                      <i
                        class="fas fa-exclamation-circle text-warning fa-3x me-4"
                        ></i>
                    </div>
                    <div>
                      <h4>Local<br />Alert</h4>
                    </div>
                  </div>
                  <div class="align-self-center">
                    <p class="mb-0">A weather bulletin has been issued for your area.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--Section: ALERTS-->
      <!--Section: Minimal statistics cards-->
      <section>
        <div class="row">
          <div class="col-xl-3 col-sm-6 col-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">IP Addresses</h4>
                <div class="d-flex justify-content-between px-md-1">
                  <div class="align-self-center">
                    <i class="fas fa-network-wired text-warning fa-2x"></i>
                  </div>
                  <div class="text-end">
                    <p class="mb-0">Wifi: 10.1.2.3</p>
                    <p class="mb-0">LAN: 10.1.3.4</p>
                    <p class="mb-0">WAN: 192.168.0.3</p>
                    <p class="mb-0">Gateway: 192.168.0.1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Mesh RF</h4>
                <div class="d-flex justify-content-between px-md-1">
                  <div class="align-self-center">
                    <i class="fas fa-wifi text-primary fa-2x"></i>
                  </div>
                  <div class="text-end">
                    <p class="mb-0">SSID: AREDN-10-v3</p>
                    <p class="mb-0">Channel: -1</p>
                    <p class="mb-0">Bandwidth: 10 Mhz</p>
                    <p class="mb-0">Frequency: 2.402 Ghz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Location</h4>
                <div class="d-flex justify-content-between px-md-1">
                  <div class="align-self-center">
                    <i class="fas fa-map-marker-alt text-normal fa-2x"></i>
                  </div>
                  <div class="text-end">
                    <p class="mb-0">Latitude: 30.22</p>
                    <p class="mb-0">Longitude: -95.55</p>
                    <p class="mb-0">Grid Square: EM20ff</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Performance</h4>
                <div class="d-flex justify-content-between px-md-1">
                  <div class="align-self-center">
                    <i class="fas fa-tachometer-alt text-normal fa-2x"></i>
                  </div>
                  <div class="text-end">
                    <p class="mb-0">Load Avg (1min): 0.21</p>
                    <p class="mb-0">Load Avg (5min): 0.13</p>
                    <p class="mb-0">Load Avg (15min): 0.1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-3 col-sm-6 col-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 class="text-danger">8292kb</h3>
                    <p class="mb-0">Freespace in /</p>
                  </div>
                  <div class="align-self-center">
                    <i class="fas fa-rocket text-danger fa-3x"></i>
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
                    <h3 class="text-success">29148kb</h3>
                    <p class="mb-0">Freespace in /tmp</p>
                  </div>
                  <div class="align-self-center">
                    <i class="far fa-user text-success fa-3x"></i>
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
                    <h3 class="text-warning">64.89 %</h3>
                    <p class="mb-0">foo</p>
                  </div>
                  <div class="align-self-center">
                    <i class="fas fa-chart-pie text-warning fa-3x"></i>
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
                    <h3 class="text-info">423</h3>
                    <p class="mb-0">Support Tickets</p>
                  </div>
                  <div class="align-self-center">
                    <i class="far fa-life-ring text-info fa-3x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      <!--Section: Minimal statistics cards-->

    </div>
  </main>
  <!--Main layout-->
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

<style lang="scss" scoped></style>