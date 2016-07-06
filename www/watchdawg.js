//a script to rebuild only changed files on saves

var fs = require('fs');
var exec = require('child_process').exec;
console.log('Watchem!');
wlist = [	'source',
			'source/js',
			'source/css',
			'source/River',
			'source/map'];

var param = [];			
var plist = [];
var timer = false;
process.env.MIDDLEMAN_BUILD_TARGET = 'web'; 

for(x in wlist)
{
	var wx = x;
	
	plist[wx] = wlist[x];
	fs.watch(wlist[x], function (event, filename) {
		if (filename)
			for(y in wlist)
			{
				param = filename;
				try{
					
					if(fs.statSync(wlist[y]+'/'+filename))
						{console.log(". . .");plist[y] = filename;
						grrr(wlist[y]+'/'+ filename, x);}
				}
				catch(e){;}
			}
		else { console.log('...');}
	});
}


var grrr = function(fname, x){

	var myx = x;
	timer = setTimeout(function(){
		clearTimeout(timer);
		if(param != '')
		{
			//console.log(plist);
			//console.log(param);
			//console.log(myx);
			fname = String(fname).replace(".erb", '').replace('.slim', '').replace('source', '').substring(1);

			
			param = '';
			command = 'middleman build --glob="'+fname+'" --no-clean';
			console.log("Grrr... "+command);
			
		exec(command, function(error, stdout, stderr) {
			console.log("Getcha dawg!");
			console.log(stdout);
		  });
			
			
		}
		else
			console.log("");
		
	}, 1000);
}