<template>
  <div class="col-xl-3 col-sm-6 col-12 mb-4">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Performance</h4>
        <div class="d-flex justify-content-between px-md-1">
          <div class="align-self-center">
            <i class="fas fa-tachometer-alt text-normal fa-2x"></i>
          </div>
          <div class="text-end">
            <p class="mb-0">Uptime: {{ info.uptime }}</p>
            <p class="mb-0">Load Avg (1min): {{ info.loads["0"] }}</p>
            <p class="mb-0">Load Avg (5min): {{ info.loads["1"] }}</p>
            <p class="mb-0">Load Avg (15min): {{ info.loads["2"] }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default ({
    name: "Performance",
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
