
var widgetHtml = '<iframe src="https://www.prepostseo.com/widget/wordcount" style="border:0;width:100%;min-height:1000px;height:100%;"></iframe>';
var widgetTag = document.getElementById("ppsLink");
if (widgetTag === null){ 
<<<<<<< HEAD
	widgetHtml += '<div style="text-align: center; font-size:12px; color:#333;"><p>Word Counter provided by <a href="https://www.prepostseo.com/word-count-character-count-tool" target="_blank"  style="color:#000;">prepostseo.com</a></p></div>';
=======
	widgetHtml += '<div style="text-align: center; font-size:12px; color:#333;"><p>Word Counter provided by <a id="ppsLink" href="https://www.prepostseo.com/word-count-character-count-tool" target="_blank"  style="color:#000;">prepostseo.com</a></p></div>';
>>>>>>> 9e5ae2cfb8f4a105aecb1e95e58070d7bec88f16
	
} else {
	var linkUrl = widgetTag.getAttribute("href");	
	if(linkUrl !== 'https://www.prepostseo.com/word-count-character-count-tool'){
<<<<<<< HEAD
		widgetHtml += '<div style="text-align: center; font-size:12px; color:#333;"><p>Word Counter provided by <a href="https://www.prepostseo.com/word-count-character-count-tool" target="_blank"  style="color:#000;">prepostseo.com</a></p></div>';
=======
		widgetHtml += '<div style="text-align: center; font-size:12px; color:#333;"><p>Word Counter provided by <a id="ppsLink" href="https://www.prepostseo.com/word-count-character-count-tool" target="_blank"  style="color:#000;">prepostseo.com</a></p></div>';
>>>>>>> 9e5ae2cfb8f4a105aecb1e95e58070d7bec88f16
	}
}

var isNew = document.getElementById("ppsWidgetCode");

document.getElementById("ppsWidgetCode").innerHTML = widgetHtml;
