$(function(){
	var langRegex = /^[ \t]*lang(?:uage)?(?::[ \t]*|-)(\w+)[ \t]*$/im,
		previewRegex = /^[ \t]*preview(?:|[ \t]*(\w*))[ \t]*$/im;
	$('code').each(function(i,item){
		var $item = $(item),
			prevSibling = $item.parent()[0].previousSibling,
			match,
			lang,
			updater,
			comment;

		if(prevSibling.nodeType == 3){
			prevSibling = prevSibling.previousSibling;
		}

		if(prevSibling.nodeType == 8){
			comment = prevSibling.textContent;

			match = comment.match(langRegex);
			if(match) {
				lang = match[1];
				$item.addClass("language-"+lang);
			}

			match = comment.match(previewRegex);
			if(match && match[1] != "no"){

				updater = function(){
					item.preview.attr("src", "data:text/html;charset=utf-8," + encodeURIComponent( $item.text() ) );
				};

				item.preview = $('<iframe>');
				updater();

				$('<div>')
					.addClass("iframe-wrapper")
					.append(item.preview)
					.insertAfter( $item.parent() );

				$item
					.on("keyup", updater)
					.on("blur", function(){
						Prism.highlightElement(item);
					})
					.attr("contenteditable", true);
			}
		}
	});

	Prism.highlightAll();
});
