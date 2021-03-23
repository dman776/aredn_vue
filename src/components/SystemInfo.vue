<template>
  <div class="col-xl-6 col-md-12 mb-4">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">System Information</h4>
        <div class="d-flex justify-content-between px-md-1">
          <div class="align-self-center">
            <i class="fas fa-info-circle text-normal fa-2x"></i>
          </div>
          <div class="text-end">
            <p class="mb-0">Model: {{ info.model }}</p>
            <p class="mb-0">Firmware Version: {{ info.firmware_version }}</p>
            <p class="mb-0">Node Date: {{ info.date }}</p>
            <p class="mb-0">Node Time: {{ info.time }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default ({
    name: "SystemInfo",
    props: {
      info: {} 
    }
})
</script>

<style scoped>

</style>
