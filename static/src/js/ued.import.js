var ued_conf ={
		
//		root: 'http://localhost:8080/moli/',
//		ampath:'../moli/',
//		version:'v0.0.1',
//		waitTime: 60,
//		mPath :'//',
//		interPath: '/bizcenter-web',
//		publishVersion:'V2017',
//		mode:'dev' // dev/online
		root: '../',
		ampath:'../moli/',
		version:'v0.0.1',
		waitTime: 60,
		mPath :'//',
		interPath: '/bizcenter-web',
		publishVersion:'V2017',
		mode:'dev' // dev/online

};

window.ued_souce = {
					"commonJs.js":["lib/jquery/require.js","lib/jquery/jquery-1.8.3.min.js","js/page/menu.js"],
					"commonCss.css":["lib/bootstrap/css/bootstrap.min.css"]}
var ued_root = ued_conf.root;
/**
 *@function import	
 *@param id 静态文件的id名称
 *@param filetype 文件类型 js/css
 *@param mode 运行环境 dev/online
**/
function ued_import(id,filetype,mode,isHead){
	
	var     __id = id+'.' +filetype,
//			__mode = ued_mode,
			jsTemplate = '<script src="${src}" charset="utf-8" type="text/javascript" itemid="${itemid}"><\/script>',
			cssTemplate = '<link rel="stylesheet" type="text/css" href="${href}"';

	function __import(aFiles,type,id){
	
		for(var i=0;i<aFiles.length;i++){
			
			var outStr = '';
			if(type == "js"){
				outStr = jsTemplate.replace("${src}",ued_root + aFiles[i]).replace("${itemid}",id);
			}else if(type=="css"){
				outStr = cssTemplate.replace("${href}",ued_root + aFiles[i]).replace("${itemid}",id);
			}

			if(isHead){

                asyncImportJs(ued_root + aFiles[i]);

            }else{

                document.write(outStr);

            }
		}
	}
	__import(ued_souce[__id], filetype, __id);

}