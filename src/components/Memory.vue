<template>
  <div class="col-xl-6 col-md-12 mb-4">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Memory</h4>
        <div class="d-flex justify-content-between px-md-1">
          <div class="align-self-center">
            <i class="fas fa-memory text-normal fa-2x"></i>
          </div>
          <div class="text-end">
            <p class="mb-0">Free RAM: {{ info.freeram }}</p>
            <p class="mb-0">Shared RAM: {{ info.sharedram }}</p>
            <p class="mb-0">Buffer RAM: {{ info.bufferram }}</p>
            <p class="mb-0">&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default ({
    name: "Memory",
    props: {
      info: {} 
    }
})
</script>

<style scoped>

</style>
