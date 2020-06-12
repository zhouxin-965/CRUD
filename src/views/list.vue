<template>
  <div>
     <el-table :data="article">
        <el-table-column prop="title" label="标题" width="140">
        </el-table-column>
        <el-table-column prop="content" label="内容" width="520">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
         <template slot-scope="scope">
           <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
           <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
         </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
  components:{},
  
  props:{},
  data(){
    return {
      article:[]
    }
  },
  methods:{
    fetch(){
      this.$http.get('articles').then(res=>{
      this.article=res.data
    })
  },
    
    edit(id){
      this.$router.push(`/articles/edit/${id}`)

    },
    remove(id){
      this.$http.delete(`articles/${id}`).then(res=>{
        this.$message({
          message: '删除成功',
          type: 'success'
        });
      });
      this.fetch()
    }

  },
  created(){
    //创建时就请求数据并渲染在页面
    this.fetch()
  }
}
</script>
<style  scoped>
</style>