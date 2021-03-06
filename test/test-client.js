var total_pixels = 90;

var artnetclient = require('../lib/artnet_client');

//data
var data = new Array();
for(var i=0;i<total_pixels;i++) {
	//pixel x
	for(var c=0;c<3;c++) { //rgb
		data.push(255); //r,g,b
	}
}

var controllers = 1;

//universes
var universes = new Array();
for(var c=0;c<controllers;c++) {
	universes.push( artnetclient.createClient('192.168.1.100', 6454, 1) );
	universes.push( artnetclient.createClient('192.168.1.100', 6454, 2) );
	universes.push( artnetclient.createClient('192.168.1.100', 6454, 3) );
	universes.push( artnetclient.createClient('192.168.1.100', 6454, 4) );
}
for(var u=0;u<universes.length;u++) universes[u].send(data);