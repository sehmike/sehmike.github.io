var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*!
 * Scaler: Scaling background images to fill browser window with centering and aspect ratio. iPad and iPhone friendly  - v3 - 04/06/2010
 * http://klippoglim.no/
 * http://kirie.no/
 * 
 * Copyright (c) 2010 Eirik Backer
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.gnu.org/licenses/gpl-2.0.html) licenses.
 */

function Scaler(id,els){
	var hold=id.innerHTML?id:document.getElementById(id),imgs=hold.getElementsByTagName('img'),els=[],index=0;					//Get images and set current index
	for(var n=hold.firstChild;n;n=n.nextSibling)if(n.nodeType===1&&n!==hold)els.push(n);										//Get hold children
	var resize=function(to){
		var to=((to==='+1'?index+1:(to==='-1'?index-1:(isNaN(to)?index:to)))%imgs.length),to;									//Get current index
		var i=imgs[to=to<0?imgs.length-1:to],nw=Math.round(document.body.clientHeight*(i.offsetWidth/i.offsetHeight));			//Get img and calculate new width
		i.style.width=(i.offsetWidth>i.offsetHeight&&document.body.clientWidth>nw)?'50%':nw+'px';								//Scale by css if possible
		return {from:index,to:index=to,els:els};
	}

	if(window.attachEvent){window.attachEvent('onload',resize);window.attachEvent('onresize',resize)}							//Attact events IE
	else{																														//Attact events others
		window.addEventListener('load',resize,false);
		window.addEventListener('resize',resize,false);
		window.addEventListener('DOMContentLoaded',resize,false);
	}
	return resize;
};

/*
 * How to use:
 * 
 * var myscaler=Scale('id-of-the-container-element',[elements to swap]);	// Bind events and return a scale function
 * myscaler(3);																// Swap to image with index 3
 * myscaler('+1');															// Go to next image (loops to first if current is the end of gallery)
 * myscaler('-1');															// Go to previous image (loops to last if current is the first of gallery)
 * 
 * See example.js for a simple example implementation
 */

}