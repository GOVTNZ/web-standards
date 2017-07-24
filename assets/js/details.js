//convert all containers with class="details" to details/summary
$(document).ready(function(){	

	//test for native <details> support
	function supports_details(){
		return('open' in document.createElement('details'));
	}
	//add <details> support as applicable
	function details() {
		//for each <details> element
		$('details').each(function(i){
			//get refs to the <details> and <summary> element
			var $details=$(this);
			var $summary=$('summary',$details).first();
			//add ARIA role to <details>
			$details.attr('role','group');
			//make sure <details> has unique @id
			if(!$details.attr('id')){
				$details.attr('id','details-'+i);
			}
			//get current <details> open state
			var isOpen=$details.prop('open');
			if(typeof isOpen==='undefined'){
				isOpen=false;
			}
			//add ARIA attrs and state toggle to <summary> in all cases
			$summary.attr({
				'role':'button',
				'aria-controls':$details.attr('id'),
				'aria-expanded':isOpen
			}).click(function(){
				if($details.attr('open')){
					$summary.attr('aria-expanded',false);
				} else {
					$summary.attr('aria-expanded',true);
				}
			});
			//if no native <details> support
			if(!supports_details()){
				//add class to <html>
				$('html').addClass('no-details');
				//make <summary> focusable and enable kbd operation on Enter and Space 
				$summary.attr('tabindex',0).keypress(function(event){
					if(event.which==13||event.which==32){
						event.preventDefault();
						$summary.click();
					}
				}).click(function(){
					if($details.attr('open')){
						$details.removeAttr('open');
					} else {
						$details.attr('open','open');
					}
				});
			}}
		);
	}
//get all containers with class="details", and for each one...
	$('.details').each(function() {
		$details = $(this);
		$summary = $details.find(">:first-child").wrap('<summary></summary>');
		var detailsClass = "";
		if ($details.hasClass("top")) {
			detailsClass="top";
		} else if ($details.hasClass("test")) {
			detailsClass="test";
		}
		$details.wrapInner('<details class="' + detailsClass + '"></details>');
		$details.contents().unwrap();
	});
	details();
});