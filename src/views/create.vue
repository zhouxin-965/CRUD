<template>
   <el-form ref="form" :model="article" label-width="80px" @submit.native.prevent="onSubmit">
  <el-form-item label="文章名称">
    <el-input v-model="article.title"></el-input>
  </el-form-item>

  <el-form-item label="文章内容">
    <el-input type="textarea" v-model="article.content"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" native-type="submit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        article: {}
      }
    },
    methods: {
      onSubmit() {
        this.$http.post('/articles',this.article)
        this.$message({
          message: '添加成功',
          type: 'success'
        });
        this.$router.push('/articles/list')
      }
      
    },
    
  }
</script>