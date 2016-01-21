		// http://www.cjboco.com/blog.cfm/post/determining-an-elements-width-and-height-using-javascript
				
		Element.prototype.getElementWidth = function() {
		   if (typeof this.clip !== "undefined") {
			  return this.clip.width;
		   } else {
			  if (this.style.pixelWidth) {
				 return this.style.pixelWidth;
			  } else {
				 return this.offsetWidth;
			  }
		   }
		};	

		Element.prototype.getElementHeight = function() {
		   if (typeof this.clip !== "undefined") {
			  return this.clip.height;
		   } else {
			  if (this.style.pixelHeight) {
				 return this.style.pixelHeight;
			  } else {
				 return this.offsetHeight;
			  }
		   }
		};	

		Element.prototype.setSize = function(thisLogo, thisName) {

		// http://www.javascripter.net/faq/browserw.htm

			var wDoc = 630, hDoc = 460;
			if (document.body && document.body.offsetWidth) {
			 wDoc = document.body.offsetWidth;
			 hDoc = document.body.offsetHeight;
			}
			if (document.compatMode=='CSS1Compat' &&
				document.documentElement &&
				document.documentElement.offsetWidth ) {
			 wDoc = document.documentElement.offsetWidth;
			 hDoc = document.documentElement.offsetHeight;
			}
			if (window.innerWidth && window.innerHeight) {
			 wDoc = window.innerWidth;
			 hDoc = window.innerHeight;
			}

			if (wDoc > hDoc) {
				var baseLine = hDoc * .7;
			} else {
				var baseLine = wDoc * .7;
			}

			var wElement = Math.round(baseLine * 100)/100 ; // = thisLogo.getElementWidth();
			thisLogo.style.width = wElement + 'px';
			thisLogo.style.height = wElement + 'px';
			var hDoc = document.height;

			var hLogoFont = Math.round((wElement * .39) * 100)/100;
			var lhLogoFont = Math.round((wElement * .60) * 100)/100;
			thisLogo.style.fontSize = hLogoFont + 'px';
			thisLogo.style.lineHeight = lhLogoFont + 'px';
			
			var hNameFont = Math.round((wElement * .07) * 100)/100;
			var lhNameFont = Math.round((wElement * .07) * 100)/100;
			thisName.style.fontSize = hNameFont + 'px';
			thisName.style.lineHeight = lhNameFont + 'px';
			thisName.style.marginTop = (lhNameFont * .5 )+ 'px';
		}


		window.onload=function() {
			var idLogo = document.getElementById('rla-logo');
			var idName = document.getElementById('rla-name');
			idLogo.setSize(idLogo,idName);
		};

		window.onresize=function() {
			var idLogo = document.getElementById('rla-logo');
			var idName = document.getElementById('rla-name');

			idLogo.setSize(idLogo, idName);
		};
			