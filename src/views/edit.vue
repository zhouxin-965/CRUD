<template>
   <el-form ref="form" :model="article" label-width="80px" @submit.native.prevent="onSubmit">
  <el-form-item label="活动名称">
    <el-input v-model="article.title"></el-input>
  </el-form-item>

  <el-form-item label="活动形式">
    <el-input type="textarea" v-model="article.content"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" native-type="submit">保存</el-button>
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
        //路由传参
        this.$http.put(`/articles/${this.$route.params.id}`,this.article)
        this.$message({
          message: '修改成功',
          type: 'success'
        });
        this.$router.push('/articles/list')
      }
    },
    created(){
      //这里的id是vue里里面传过来的id，点击编辑传过来的
      this.$http.get(`/articles/${this.$route.params.id}`).then(res=>{
        this.article=res.data
      })
    }
  }
</script>