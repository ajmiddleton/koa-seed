process.env.NODE_ENV = process.env.NODE_ENV || 'development'

let _require = (path)=>
  return require(__dirname + "/${path}")

let koa = require('koa');
let compress = require('koa-compress');
let logger = require('koa-logger');
let serve = require('koa-static');
let bodyParser = require('koa-bodyparser');
let route = require('koa-route');
let path = require('path');
let app = module.exports = koa();

app.use(logger());
app.use(bodyParser());

// app.use(routes)

app.use(serve(path.join(__dirname, 'public')));

app.use(compress());

if (!module.parent){
  app.listen(3000);
  console.log('koa listening on port 3000');
}
