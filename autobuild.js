const { exec } = require('child_process');
var fsTimeout;

var watch = require('node-watch');
 
watch('.', { recursive: true }, function(evt, name) {
    if (!fsTimeout && name.indexOf('.git') < 0 && name.indexOf('main.js') < 0 &&
    name.indexOf('npm-debug.log') < 0 || 
    name.indexOf('main.jsx') >= 0) {
		console.log('%s changed.', name);
	    fsTimeout = setTimeout(function() { 
	    	fsTimeout=null;
	    	exec('npm run build'); 
	    }, 300); // give 5 seconds for multiple events 
	}
});