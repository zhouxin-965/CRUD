const express = require('express')
const app = express()

//允许跨域
app.use(require('cors')())
//字符串转换
app.use(express.json())

//连接mongoose
const mongo =require('mongoose')
mongo.connect("mongodb://localhost:27017/element-admin",{
  useCreateIndex:true,
  useNewUrlParser:true,
  useFindAndModify:true,
  useUnifiedTopology:true
})

const Article=mongo.model('Article',new mongo.Schema({
  title:{type:String},
  content:{type:String}
}))

app.get('/', async(req,res)=>{
  res.send('index')
})

//新增文章
app.post('/api/articles',async(req,res)=>{
  const article = await Article.create(req.body)
  res.send(article)
})
//获取文章
app.get('/api/articles',async(req,res)=>{
  const article =await Article.find()
  res.send(article)
})
//通过ID获取文章
app.get('/api/articles/:id',async(req,res)=>{
  const article =await Article.findById(req.params.id)
  res.send(article)
})
//修改
app.put('/api/articles/:id',async(req,res)=>{
  const article =await Article.findByIdAndUpdate(req.params.id,req.body)
  res.send(article)
})
//删除
app.delete('/api/articles/:id',async(req,res)=>{
  await Article.findByIdAndDelete(req.params.id)
  res.send({
    status:true
  })
})


app.listen(3000,()=>{
  console.log('server is running......')
})