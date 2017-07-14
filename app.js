/*
*2017/6/23 by dds
*应用启动文件
*/

let express = require('express')
let app = express()
let swig = require('swig')
let bodyParser = require('body-Parser')
//配置应用模板
app.engine('html',swig.renderFile)
//设置模板文件存放目录
app.set('views','./views')
//注册刚刚配置好的模板引擎
app.set('view engine','html')
//开发过程中，取消模板缓存
swig.setDefaults({cache:false})
//静态文件处理
app.use('/static',express.static(__dirname+'/static'))
app.use(bodyParser.urlencoded({extended:true}))

/*let router = express.Router();
router.get('/',(req,res,next)=>{
	res.render('index');
});*/

//分离请求逻辑
app.use('/',(req,res,next)=>{
	res.render('index.html')
})

//开启服务器监听
app.listen(3000,()=>{
	console.log("open server in port:3000")
})
