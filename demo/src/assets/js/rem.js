
	// 常量 const
	const designWidh=750;
	const fontSize = 75;
	function resizeFont(){
		// 变量 var
		var CW = document.documentElement.clientWidth;

		var ratio = CW/designWidh;

		var newFontSize=ratio<1?ratio*75:fontSize*ratio;

		document.querySelector("html").style.fontSize= newFontSize + "px";

	}
	// 执行resizeFont
	resizeFont();
	// 窗口大小改变时执行resizeFont
	window.onresize= resizeFont;
	window.addEventListener("orientation",resizeFont,false);
     //        // 屏幕自动旋转得时候
    // window.addEventListener('load',function(){
    //     // 移动端设计尺寸
    //     var dh=750;
    //     function resize(){
    //         var cw=document.documentElement.clientWidth;
    //         var bili=cw/dh*100;
    //         document.documentElement.style.fontSize=bili+"px";
    //     }
    //     window.addEventListener('resize',resize);
    //     resize();
    //
    // },false);
