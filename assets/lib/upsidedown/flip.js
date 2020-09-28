String.implement({
	flipText: function (backwards, upsideDown) {
		var convertedTxt = "";
		var convertedHTML = "";
		for (var c = (this.length - 1); c >= 0; c--) {
			var p = null;
			var didConvertedHTML = false;
			var g = (backwards) ? c : (-1 * (c - this.length + 1));
			var s = this.charAt(g);
			if (upsideDown) {
				p = (flipTable[s] || flipTableFlipped[s] || flipTable[s.toLowerCase()] || s);
			} else {
				p = s;
			}
			convertedTxt += p;
			
		}
		return Array(convertedTxt, convertedHTML);
	}
});
window.addEvent('domready', function () {
	var original = document.getElementById('originalText');
	
	original.focus();
	
	var converted = document.getElementById('convertedText');
	var convertedHTML = document.getElementById('convertedHTML');
	var back = document.getElementById("backwards");
	var upside = document.getElementById("upsideDown");
	
	var lastOriginalV = "";
	var justChange = function () {
		lastOriginalV = original.value;
//		$('charCount').set('text', lastOriginalV.length);
		var converts = lastOriginalV.flipText(back.checked, upside.checked);
		converted.value = converts[0];
		
	}
	var checkChange = function () {
		if (original.value != lastOriginalV) {
			justChange();
		}
	};
	original.addEvent('keyup', function (e) {
		checkChange();
	});
	checkChange.periodical(500);
	back.addEvent('click', function (e) {
		justChange();
	});
	upside.addEvent('click', function (e) {
		justChange();
	});
	converted.addEvent('focus', function (e) {
		this.select();
	});
	converted.addEvent('mouseup', function (e) {
		e.preventDefault();
	});
	checkChange();
});