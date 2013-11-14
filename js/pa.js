$(function(){
	var regex = /\blang(?:uage)?(?:\s+|-)(\w+)(?: (preview))?\b/i;
	$('code').each(function(i,item){
		var $item = $(item),
			prevSibling = $item.parent()[0].previousSibling,
			match,
			lang,
			updater;

		if(prevSibling.nodeType == 3){
			prevSibling = prevSibling.previousSibling;
		}

		if(prevSibling.nodeType == 8){
			match = prevSibling.textContent.match(regex);
			lang = match[1];
			$item.addClass("language-"+lang);

			if(match[2]){

				updater = function(){
					item.preview.attr("src", "data:text/html," + encodeURIComponent( $item.text() ) );
				};

				item.preview = $('<iframe>');
				$('<div>')
					.addClass("iframe-wrapper")
					.append(item.preview)
					.insertAfter( $item.parent() );

				$item.on("keyup", updater);

				$item.attr("contenteditable", true);
			}
		}
	});

	Prism.highlightAll();
});
