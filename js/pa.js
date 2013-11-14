$(function(){
	var regex = /\blang(?:uage)?(?:\s+|-)(\w+)(?: (preview))?\b/i;
	$('code').each(function(i,item){
		var $item = $(item),
			prevSibling = $item.parent()[0].previousSibling,
			match,
			lang;

		if(prevSibling.nodeType == 3){
			prevSibling = prevSibling.previousSibling;
		}

		if(prevSibling.nodeType == 8){
			match = prevSibling.textContent.match(regex);
			lang = match[1];
			$item.addClass("language-"+lang);

			if(match[2]){
				$('<div>')
				.addClass("iframe-wrapper")
				.append(
					$('<iframe>')
						.attr('src',"data:text/html," + encodeURIComponent( $item.text() ) )
				)
				.insertAfter( $item.parent() );
			}
		}
	});

	Prism.highlightAll();
});
