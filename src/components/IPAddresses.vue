<template>
  <div class="col-xl-3 col-sm-6 col-12 mb-4">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">IP Addresses</h4>
        <div class="d-flex justify-content-between px-md-1">
          <div class="align-self-center">
            <i class="fas fa-network-wired text-warning fa-2x"></i>
          </div>
          <div class="text-end">
            <p class="mb-0">Wifi: {{ info.wifi === "" ? "DISABLED" : info.wifi }}</p>
            <p class="mb-0">LAN: {{ info.lan }}</p>
            <p class="mb-0">WAN: {{ info.wan === "" ? "N/A" : info.wan }}</p>
            <p class="mb-0">Gateway: {{ info.gateway }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default ({
    name: "IPAddresses",
    props: {
      debug: String,
      info: {} 
    },
    created() {
      // console.log(this.info);
    }
})

</script>

<style scoped>

</style>
