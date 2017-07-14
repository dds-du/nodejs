/*
*用户首页
*next函数
*
*/
let express = require('express');
let router = express.Router();

router.get('/',(req,res)=>{
	//读取views目录下的指定文件,解析并返回客户端;
	res.render('index');

});

exports.router=router;