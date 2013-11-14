---
layout: lesson
title: HTML
prev_href: /lesson00
next_href: /lesson02
code_lang: language-markup
---
Lesson 1: HTML
==============

Take a look at this:

<!-- language markup preview-->

	<!DOCTYPE html>
	<html>
		<head>
			<title>Potential Adventure</title>
		</head>

		<body>
			<p>Welcome to Potential Adventure!</p>
		</body>
	</html>

This is a complete html page. That's it, all that's needed to show a page in a browser. Not much is it?

The first thing you will notice is what are called **tags**. These look something like this: `<html>`. Tags
all start with a `<` and end with a `>`, these are called **angle brackets**. The word immediately after the
opening bracket `<` is called the **name** of the tag.

There are two types of tag: **opening** and **closing** tags. Opening tags look like this `<html>` and
closing tags look like this `</html>`, notice the `/`.
Everything between an opening and matching closing tag is said to be inside the tag.

So in this case the HTML page is everything between the `<html>` and `</html>` tags.
Which is just what we expect.

Now let's look at the main parts of the page. First we have the `<head>` section:

	<head>
		<title>Potential Adventure</title>
	</head>

This includes information *about* the page. Nothing between the `<head>` tags will be displayed on the page.

Here we're only telling the browser one thing &ndash; that the `<title>` of the page is
*Potential Adventure*. The title is what's shown on the browser tab.

That was pretty simple wasn't it? We'll see lots more things we can put in the `<head>` shortly. Now on to the
`<body>`:

	<body>
		<p>Welcome to Potential Adventure!</p>
	</body>

Only things which are between the `<body>` tags will be shown on the page.

Here we just have one `<p>` tag. *p* stands for paragraph. They are used to show a paragraph of text.

Every paragraph of text on this page is a new `<p>` tag. You can see the welcome message is the only thing shown
in the handy preview below the code sample.

<div class="note note-pro">
	<h5>Live Preview</h5>
	<p>Now you've looked at some code go back up to the preview box at the top of the page.
	You can change the text in the code box and the preview will update as you are typing.
	Give it a try now!</p>
</div>
