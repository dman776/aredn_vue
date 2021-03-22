<template>
    <div class="col-xl-3 col-sm-6 col-12 mb-4">
        <div class="card">
            <div class="card-body">
            <div class="d-flex justify-content-between px-md-1">
                <div>
                <h3 class="text-danger">{{ info.rootfree}} kb</h3>
                <p class="mb-0">Freespace in /</p>
                </div>
                <div class="align-self-center">
                <i class="fas fa-rocket text-danger fa-3x"></i>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>

export default ({
    name: "FSRootFree",
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
