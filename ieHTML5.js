/*	ieHTML5.js
	
	Simple Patch to enable HTML elements in IE<9
	
	Instructions:

		1	Put this file in, say, your scripts folder.
		2	Make any tweeks to the content of the blockElements or inlineElements strings
			There should be a single space between elements.
		3	Add the following to your HTML file. It should be before the CSS links.

			<!--[if lt IE 9]><script type="text/javascript" src="scripts/ieHTML5.js"></script><![endif]-->
			
	Share & Enjoy
	================================================ */

	(function() {
		'use strict';
		//	Enable Elements
			var i;
			//	Block Elements
				var blockElements='section header footer nav article aside hgroup main figure figcaption'.split(' ');
				for(i=0;i<blockElements.length;i++) document.createElement(blockElements[i]);
			//	Inline Elements
				var inlineElements='time date'.split(' ');
				for(i=0;i<inlineElements.length;i++) document.createElement(inlineElements[i]);

		//	CSS Patch
			var	css = blockElements.join(',');
				css+= ' { display: block; }';
			var head = document.getElementsByTagName('head')[0];
			var style = document.createElement('style');
				style.type = 'text/css';
				style.styleSheet.cssText = css;
			head.appendChild(style);
	})();