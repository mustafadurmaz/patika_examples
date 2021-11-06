const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("İstek gönderildi.");

    const url=req.url;

    if(url==='/'){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.write('<h2>index sayfasına hoşgeldiniz');
    }
    if(url==='/hakkimda'){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.write('<h2>hakkimda sayfasına hoşgeldiniz');
    }
    if(url==='/iletisim'){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.write('<h2>iletisim sayfasına hoşgeldiniz');
    }

    res.end();

});

const port=5000;

server.listen(5000,()=>{
    console.log(`Sunucu port ${port}'de başlatıldı.'`)

    
    
})