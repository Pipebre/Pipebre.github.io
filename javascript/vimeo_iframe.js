{
	resizeVimeoIframes();
	addEventListener('resize', resizeVimeoIframes);

	function resizeVimeoIframes(){
		//Gets the computed width of the iframes with class vimeo-iframe and
		//set their heights according to 16:9 aspect ratio.

		iframes= document.querySelectorAll('.vimeo-iframe');
		for (let i = iframes.length - 1; i >= 0; i--) {
			const style= getComputedStyle(iframes[i]);
			const iframeWidth= parseInt(style.getPropertyValue('width'));
			const height= ((iframeWidth/16)*9)+'px';
			iframes[i].style.height= height;
		}
	}
}