$(function(){
	var regex = /\blang(uage)?(?:\s+|-)(\w+)\b/i;
	$('code').each(function(i,item){
		var $item = $(item),
			prevSibling = $item.parent()[0].previousSibling,
			lang;

		if(prevSibling.nodeType == 3){
			prevSibling = prevSibling.previousSibling;
		}

		if(prevSibling.nodeType == 8){
			lang = prevSibling.textContent.match(regex)[0];
			$item.addClass("language-"+lang);
		}
	});

	Prism.highlightAll();
});
