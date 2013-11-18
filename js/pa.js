$(function(){
	var langRegex = /^[ \t]*lang(?:uage)?(?::[ \t]*|-)(\S+)[ \t]*$/im,
		previewRegex = /^[ \t]*preview(?::[ \t]*(\S*))?[ \t]*$/im,
		cssParentRegex = /^[ \t]*css\((\S*)\)[ \t]*$/im,
		idRegex = /^[ \t]*id:[ \t]*(\S*)[ \t]*$/im,
		lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i,
		negative = ['no','false'],
		codeBlocks = {},
		typeCounts = {};

	$('pre code').each(function(i,item){
		var $item = $(item),
			prevSibling = $item.parent()[0].previousSibling,
			match,
			value,
			updater,
			getSource,
			comment,
			lang,
			id;

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
			value = match && match[1];
			if(match && negative.indexOf(value) == -1){

				updater = function(){
					item.preview.attr("src", "data:text/html;charset=utf-8," + encodeURIComponent( getSource() ) );
				};

				match = value && value.match(cssParentRegex);
				value = match && match[1];
				if(match){
					if(value && codeBlocks[value]){

						// Apply this code block ass CSS to the specified code block id
						getSource = function(){
							var source = codeBlocks[value].text(),
								style = "<style>" + $item.text() + "</style>";
							return source + style;
						};

						// Watch parent block for changes as well
						codeBlocks[value]
							.on("keyup", updater)
							.attr("contenteditable", true);
					}
					else return;
				}
				else {
					getSource = function() {
						return $item.text();
					}
				}

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

			match = comment.match(idRegex);
			if(match){
				id = match[1];
			}
		}

		if(!id){
			id = lang || getLanguage(item);

			if(!typeCounts[id]){
				typeCounts[id] = 1;
			}
			else {
				typeCounts[id] += 1;
			}

			id = id + pad(typeCounts[id],2);
		}

		codeBlocks[id] = $item;

		$item.attr("id", id);
	});

	Prism.highlightAll();

	function pad(num, size) {
		var s = num+"";
		while (s.length < size) s = "0" + s;
		return s;
	}

	function getLanguage(element){
		var parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			return (parent.className.match(lang) || [,''])[1];
		}
	}
});
