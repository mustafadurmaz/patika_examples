const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  
    const url=ctx.path;

    if(url==='/'){
        ctx.body = '<h1>index sayfasına hoşgeldiniz</h1>';
    }

    else if(url==='/about'){
        ctx.body = '<h1>about sayfasına hoşgeldiniz</h1>';
    }

    else if(url==='/iletisim'){
        ctx.body = '<h1>iletisim sayfasına hoşgeldiniz</h1>';
    }


});

app.listen(3000);

