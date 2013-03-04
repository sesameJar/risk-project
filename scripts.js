
$(function(){
	var trigger=$('footer span.trigger');

	trigger.click(function(){

		$('footer').animate({

			bottom : 0

		},900,null,function(){
			$(this).click(function(){
				$('footer').animate({
					bottom:-270
				},500)
			})
		})	

	})
	
})