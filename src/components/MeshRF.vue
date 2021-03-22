<template>
  <div class="col-xl-3 col-sm-6 col-12 mb-4">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Mesh RF</h4>
        <div class="d-flex justify-content-between px-md-1">
          <div class="align-self-center">
            <i class="fas fa-wifi text-primary fa-2x"></i>
          </div>
          <div class="text-end">
            <p class="mb-0">SSID: {{ info.ssid}}</p>
            <p class="mb-0">Channel: {{ info.channel }}</p>
            <p class="mb-0">Bandwidth: {{ info.chanbw }} Mhz</p>
            <p class="mb-0">Frequency: {{ info.frequency }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default ({
    name: "MeshRF",
    props: {
      info: {} 
    },
    created() {
      console.log(this.info);
    }
})

</script>

<style scoped>

</style>
