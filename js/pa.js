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
			lang = prevSibling.textContent.match(regex)[1];
			$item.addClass("language-"+lang);
		}
	});

	$('pre code').each(function(i,item){
		var $item = $(item);
		$('<iframe>')
			.attr('src',"data:text/html," + encodeURIComponent( $item.text() ) )
			.appendTo(
				$('<div>')
				.addClass("iframe-wrapper")
				.insertAfter( $item.parent() )
			);
	});

	Prism.highlightAll();
});
