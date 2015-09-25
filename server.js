
			exports.start = function(argv,process,os,httpServer,portfinder,opener){
				var ifaces = os.networkInterfaces();
				var port = argv[2] || parseInt(process.env.PORT, 9090),
		    	host = argv[1] || 'localhost',
					proxy = argv.P || argv.proxy;

					

					if (!port) {
					  portfinder.basePort = 9090;
					  portfinder.getPort(function (err, port) {
					    if (err) { throw err; }
					    listen(port);
					  });
					}
					else {
					  listen(port);
					}

					function listen(port) {
					  var options = {
					    root: argv[3] || './',
					    /*cache: argv.c,
					    showDir: argv.d,
					    autoIndex: argv.i,
					    robots: argv.r || argv.robots,
					    ext: argv.e || argv.ext,
					    logFn: logger.request,
					    proxy: proxy*/
					  };

					  if (argv.cors) {
					    options.cors = true;
					  }

					  

					  var server = httpServer.createServer(options);
						console.log(port);
					  server.listen(port, host, function () {
					    var canonicalHost = host === '0.0.0.0' ? '127.0.0.1' : host,
					        protocol      = 'http:';

					    
					    Object.keys(ifaces).forEach(function (dev) {
					      ifaces[dev].forEach(function (details) {
					        if (details.family === 'IPv4') {
					          console.log('    http://' + details.address + ':' + port.toString().green);
					        }
					      });
					    });

					   
					   
					    if (argv.o) {
					      opener(
					        protocol + '//' + canonicalHost + ':' + port,
					        { command: argv.o !== true ? argv.o : null }
					      );
					    }
					  });
					}

					if (process.platform === 'win32') {
					  require('readline').createInterface({
					    input: process.stdin,
					    output: process.stdout
					  }).on('SIGINT', function () {
					    process.emit('SIGINT');
					  });
					}

				
			}


