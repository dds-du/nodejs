/*
*管理员界面
*/

let express = require('express')
let router = express.Router()

router.get('/',(req,res)=>{
	res.render('admin/index')
});
exports.router=router