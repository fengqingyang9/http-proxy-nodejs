var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});
var server = http.createServer(function(req,res){
    var host = req.headers.host;
    host = host.split(':')[0];
    switch(host){
        case 'facebook.com':
        case 'www.facebook.com':
            proxy.web(req,res,{target:'http://www.facebook.com'});
        case 'twitter.com':
        case 'www.twitter.com':
            proxy.web(req,res,{target:'http://www.twitter.com'});
        break;
        default :
            res.writeHead(200,{"Content-Type":'text/html'});
            res.end('no suitable proxy');
    }
});
server.listen(8080);