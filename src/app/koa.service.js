var Koa = require('koa');
var Router = require('koa-router');
var KoaBody = require('koa-body');
var http = require("http");

var path = require('path');

var app = new Koa();
var router = new Router();

//////////////////// fetch test part ////////////////////
//////////////////// fetch test part ////////////////////
//////////////////// fetch test part ////////////////////

router.get('/',(ctx,next) => {
	ctx.body = "hello koa!"
});

// 本来因为JS的运行机制问题，回调函数等异步处理是在当前事件栈处理完成后才去处理的的队列中的，而个人感觉async的引入将本来异步的过程变为同步，即
// 将 原本的调用服务器函数获取数据，不等异步处理立马返回ctx.body
// 变 为现在的等待 异步数据的获取后才返回ctx.body
// 异步 变 同步

router.post('/api/music',KoaBody(),async(ctx,next) => {

	var dataResult = {},
		searchParams = ctx.request.body.search,
		// num 40-4首 50-8首 60-8首 70-9首 80-12首 90-22首 100-30多首
		num = 80,
		type = 1,
		url = "http://s.music.163.com/search/get/?s=" + encodeURIComponent(searchParams) + "&limit="+ num +"&type="+ type ;

	// 下面不能接受 https 的否则会报错？ 不信你可以换成一个 https 的API试试 毕竟你用的是 http module 而不是 https....
	function getSource(){
		console.log("get music source......");
		return new Promise((resolve) => {

			http.get(url,(res)=>{
				const { statusCode } = res;
					const contentType = res.headers['content-type'];

				let error;
				if (statusCode !== 200) {
					error = new Error('请求失败。\n' +`状态码: ${statusCode}`);
				} else if (!/^application\/json/.test(contentType)) {
					error = new Error('无效的 content-type.\n' +`期望 application/json 但获取的是 ${contentType}`);
				}
				if (error) {
					console.error(error.message);
					// 消耗响应数据以释放内存
					res.resume();
					return;
				}

				res.setEncoding('utf8');
					let rawData = '';
					res.on('data', (chunk) => { rawData += chunk; });
					res.on('end', () => {
						try {
							const parsedData = JSON.parse(rawData);
							// console.log(parsedData);
							dataResult = parsedData.result;
							// console.log(dataResult);
							// 执行 then()内容
							resolve();
						} catch (e) {
							console.error(e.message);
						}
					});
			}).on('error', (e) => {
			  console.error(`错误: ${e.message}`);
			});			
		})
	}
	await getSource().then(()=>{
		if(dataResult){
			ctx.body = dataResult;
		}else{
			ctx.body = {
				errno:-1,
				message:"get source fail."
			}
		}
		
	})
		
});



/////////////////////// Promise test ///////////////////////
router.get('/apii', async function (ctx,next) {
    ctx.state = {
    title: 'title'
  };
  function timeout(ms) {
    console.log("111");
    return new Promise((resolve) => {
    	console.log("222");
    	// resolve()是类似于 next() 只有调用了这个才能运行后面的 then() 
    	// Promise.resolve() == new Promise(resolve)
    	resolve();
    });
  }

  await timeout(1000).then(() => {
    console.log('333');
 });

 console.log("444");
 ctx.body=ctx;
});
/////////////////////// Promise test ///////////////////////



//////////////////// fetch test part ////////////////////
//////////////////// fetch test part ////////////////////
//////////////////// fetch test part ////////////////////


app.use(router.routes());
app.use(router.allowedMethods());

console.log("listening port 3000..")
app.listen(3000);