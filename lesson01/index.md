---
layout: lesson
title: HTML
prev_href: /lesson00
next_href: /lesson02
---
Lesson 1: HTML
==============

Take a look at this:
<div class="language-markup">

	<!DOCTYPE html>
	<html>
		<head>
			<title>Potential Adventure</title>
		</head>

		<body>
			<p>Welcome to Potential Adventure!</p>
		</body>
	</html>

</div>

This is a complete html page. That's it, all that's needed to show a page in a browser. Not much is it?

The first thing you will notice is what are called **tags**. These look like: `<html>`. They
all start with a `<` and end with a `>`. The first word after `<` is called the
**name** of the tag.

There are two types of tag: **opening** and **closing**. Opening
tags look like this `<html>` and closing tags look like this `</html>`, notice the `/`.
Everything between an opening and matching closing tag is said to be inside the tag.

So in this case the HTML page is everything between the `<html>` and `</html>` tags.
Which is just what we expect.

Now let's look at the main parts of the page. First we have the `<head>` section:
<div class="language-markup">

	<head>
		<title>Potential Adventure</title>
	</head>

</div>

This includes information *about* the page.

Here we're only telling the browser one thing &ndash; that the `<title>` of the page is
*Potential Adventure*. The title is what's shown on the browser tab.