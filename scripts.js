
$(function(){
	var trigger=$('footer span.trigger');

	trigger.click(function(){
		if($('footer').css('bottom')==0+'px'){
			$('footer').animate({

				bottom : -270

			},900)
		}else{
			$('footer').animate({

				bottom : 0

			},900)
		}	
	})
	var menus      = $('nav.main-menu menu li'),
		pin        = $('header span.pin'),
		train      = $('div.train'),
		wheel      = $('span.wheel'),
		zoom       = $('div.show-content'),
		curentMenu = 0;

	menus.click(function(){
		var thisItem = $(this).index();
		menus.eq(curentMenu).removeClass('active');
		menus.eq(thisItem).addClass('active');

		if(thisItem>=3){
			pin.animate({
				left:320+thisItem*100
			},3000)
		}else{
			pin.animate({
				left:80+thisItem*100
			},3000)
		}
		train.animate({
			'-webkit-transform':'rotate3d(0,0,1,'+(thisItem*60)+'deg)'
		},3000);
		wheel.animate({
			'-webkit-transform':'rotate3d(0,0,1,'+(thisItem*60)+'deg)'
		},3000);
		zoom.addClass('zoomoutin');
		

		setTimeout(function(){
			zoom.removeClass('zoomoutin');
		},3000)
		curentMenu=thisItem;
	});

	
})