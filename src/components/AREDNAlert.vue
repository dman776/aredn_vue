<template>
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
                    <p class="mb-0" v-html="info.aredn"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>

<script>

export default ({
    name: "AREDNAlert",
    props: {
      info: {} 
    }
})
</script>

<style scoped>

</style>
