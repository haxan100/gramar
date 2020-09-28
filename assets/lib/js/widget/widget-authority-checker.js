

var widgetHtml = '<iframe src="https://www.prepostseo.com/widget/authoritychecker" style="border:0;width:100%;min-height:600px;height:100%;"></iframe>';
var widgetTag = document.getElementById("ppsLink");
if (widgetTag === null){ 
	widgetHtml += '<div style="text-align: center; font-size:12px; color:#333;"><p>Domain Authority Checker provided by <a href="https://www.prepostseo.com/domain-authority-checker" id="ppsLink" target="_blank"  style="color:#000;">prepostseo.com</a></p></div>';
	
} else {
	var linkUrl = widgetTag.getAttribute("href");	
	if(linkUrl !== 'https://www.prepostseo.com/domain-authority-checker'){
		widgetHtml += '<div style="text-align: center; font-size:12px; color:#333;"><p>Domain Authority Checker provided by <a href="https://www.prepostseo.com/domain-authority-checker" id="ppsLink" target="_blank"  style="color:#000;">prepostseo.com</a></p></div>';
	}
}

var isNew = document.getElementById("ppsWidgetCode");
if(isNew === null){
	document.write('<iframe src="https://www.prepostseo.com/widget/authoritychecker" style="border:0;width:100%;min-height:520px;height:100%;"></iframe>');
} else {
	document.getElementById("ppsWidgetCode").innerHTML = widgetHtml;
}