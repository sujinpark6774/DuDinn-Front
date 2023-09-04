<template>
  {{ fileData }}
</template>
  
<script>
export default {
  name: 'FileList',
  components: {
  },
  data() {
    return {
        fileData: [],
    }
  },
  methods: {
    async fileListGet() {
      const res = await this.$axios.get('/api/file/select/files')
      this.fileData = res.data
    }
  },
  mounted() {
    this.fileListGet();
  }
}
</script>