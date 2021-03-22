<template>
  <div class="col-xl-3 col-sm-6 col-12 mb-4">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Location</h4>
        <div class="d-flex justify-content-between px-md-1">
          <div class="align-self-center">
            <i class="fas fa-map-marker-alt text-normal fa-2x"></i>
          </div>
          <div class="text-end">
            <p class="mb-0">Latitude: {{ info.lat === "" ? "N/A" : info.lat }}</p>
            <p class="mb-0">Longitude: {{ info.lon=== "" ? "N/A" : info.lon }}</p>
            <p class="mb-0">Grid Square: {{ info.gridsquare === "" ? "N/A" : info.gridsquare }}</p>
            <p class="mb-0">&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default ({
    name: "Location",
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
