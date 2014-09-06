ieHTML5.js
==========

Simple Patch to enable HTML elements in IE<9

You can download the latest version [here](https://github.com/manngo/ieHTML5.js/releases/latest) …
	
Instructions
------------

1. Put this file in, say, your scripts folder.
2. Make any tweeks to the content of the `blockElements` or `inlineElements` strings. There should be a single space between elements.
3. Add the following to your HTML file. It should be before the CSS links.

```html
<!--[if lt IE 9]><script type="text/javascript" src="scripts/ieHTML5.js"></script><![endif]-->
```
