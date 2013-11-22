---
layout: lesson
title: CSS
prev_href: /lesson01
next_href: /lesson03
---
Lesson 2: CSS
=============

The HTML you learned in the [first lesson](../lesson01) is used to define the structure of the page.
You use the different tags you learned to give each bit of the page meaning. However, none of the tags
will actually change the appearance of the page contents. If you look back at all the examples you will
notice they all look pretty boring right? This is where CSS comes in.

<div class="note note-info">
  <h2>Cascading Style Sheets</h2>
  <p>CSS stands for cascading style sheet. Don't worry about the cascading bit at the moment just
  remember they're what you use to style you page.</p>
</div>

CSS is used to style the contents of the page. It's very important to remember you shouln't try to style
the page with HTML tags and you shouldn't try to give meaning to the page solely through CSS</p>

<div class="note note-key">
  <h2>CSS for Style</h2>
  <p>If you look at other guides or old code on the internet you may find tags like `<font>`, `<b>` and `<i>`.
  You should not use these. They were old tags that used to be used to style pages using HTML. HTML should be
  used to give structure to the page not style. On the other hand CSS should *not* be used to give structure.
  Do not try to rely on class names to define bits of content. For example: don't just create a div with a class
```
<div class="header"></div>
```
  when a tag already exists for this purpose:
```
  <header></header>
```</p>
</div>

<!--
language: markup
-->
    <p>Welcome to Potential Adventure</p>
    
<!--
language: css
preview: css(markup01)
-->
    p {
      color: red;
    }
