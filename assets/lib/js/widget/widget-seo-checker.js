

var widgetHtml = '<iframe src="https://www.prepostseo.com/widget/seochecker" style="border:0;width:100%;min-height:600px;height:100%;"></iframe>';
var widgetTag = document.getElementById("ppsLink");
if (widgetTag === null){ 
	widgetHtml += '<div style="text-align: center; font-size:12px; color:#333;"><p>Website SEO Checker provided by <a href="https://www.prepostseo.com/website-seo-score-checker" target="_blank" id="ppsLink" style="color:#000;">prepostseo.com</a></p></div>';
	
} else {
	var linkUrl = widgetTag.getAttribute("href");	
	if(linkUrl !== 'https://www.prepostseo.com/website-seo-score-checker'){
		widgetHtml += '<div style="text-align: center; font-size:12px; color:#333;"><p>Website SEO Checker provided by <a href="https://www.prepostseo.com/website-seo-score-checker" target="_blank" id="ppsLink" style="color:#000;">prepostseo.com</a></p></div>';
	}
}

var isNew = document.getElementById("ppsWidgetCode");

document.getElementById("ppsWidgetCode").innerHTML = widgetHtml;
