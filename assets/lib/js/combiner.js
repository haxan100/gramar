$(document).ready(function(){
	$("#list").val((localStorage.getItem("list")||"").split(",").join('\n'));
	$("#suffixes").val((localStorage.getItem("suffixes")||"").split(",").join('\n'));

	$("#clear").click(function(){
		localStorage.removeItem("list");
		localStorage.removeItem("suffixes");
	});
	
	$("#combine").click(function(){
		$("#results").html("");
		var escaped = escapeHtml($("#list").val());

		var rs = new Array();
		var a = (escaped.length > 0)?escaped.trim().split('\n'):[];
		//var s = ($("#suffixes").val().length > 0)?$("#suffixes").val().trim().split('\n'):[];
		var sep = $('.seperator').val();
		var wrap = $('.wrap').val();
		var customSep = $('#custom_seperator').val();
		var customWrapIn = $('#custom_wrap_in').val();
		var customWrapOut = $('#custom_wrap_out').val();
		
		localStorage.setItem("list", a);

		if(a.length == 0)
			return;

		for (var i = 0; i < a.length; i++) {
			/*if(s.length > 0) {
				for (var k = 0; k < s.length; k++) {
					
					var formattedWord = a[i] + s[k];
					if(sep != "" && customSep == ""){
						switch (sep) {
						  case "plus":
							formattedWord = a[i] +'+'+ s[k];
							break;
						  case "dot":
							formattedWord = a[i] +'.'+ s[k];
							break;
						 case "comma":
							formattedWord = a[i] +','+ s[k];
							break;
						 case "space":
							formattedWord = a[i] +' '+ s[k];
							break;
						  default:
							formattedWord = formattedWord;
						}
					}else{
						formattedWord = a[i] +customSep+ s[k];
					}
					if(customWrapIn != "" || customWrapOut != ""){
						formattedWord = customWrapIn+formattedWord+customWrapOut;
					}else{
						if(wrap != ""){
							switch (wrap) {
							  case "dblqoutes":
								formattedWord = '"'+formattedWord+'"';
								break;
							  case "smbraces":
								formattedWord = '('+formattedWord+')';
								break;
							 case "sglqoutes":
								formattedWord = "'"+formattedWord+"'";
								break;
							case "lgbraces":
								formattedWord = '['+formattedWord+']';
								break;
							  default:
								formattedWord = formattedWord;
							}
						}
					}
					
					
					rs.push(formattedWord);
				}
			}*/
			for (var j = 0; j < a.length; j++) {
				if(!$("#double").prop('checked') && i == j)
					continue;
				
				
				
				var formattedWord = a[i] + a[j];
				if(sep != "" && customSep == ""){
					switch (sep) {
					  case "plus":
						formattedWord = a[i] +'+'+ a[j];
						break;
					  case "dot":
						formattedWord = a[i] +'.'+ a[j];
						break;
					 case "comma":
						formattedWord = a[i] +','+ a[j];
						break;
					 case "space":
						formattedWord = a[i] +' '+ a[j];
						break;
					  default:
						formattedWord = formattedWord;
					}
				}else{
					formattedWord = a[i] +customSep+ a[j];
				}
				if(customWrapIn != "" || customWrapOut != ""){
					formattedWord = customWrapIn+formattedWord+customWrapOut;
				}else{
					if(wrap != ""){
						switch (wrap) {
						  case "dblqoutes":
							formattedWord = '"'+formattedWord+'"';
							break;
						  case "smbraces":
							formattedWord = '('+formattedWord+')';
							break;
						 case "sglqoutes":
							formattedWord = "'"+formattedWord+"'";
							break;
						case "lgbraces":
							formattedWord = '['+formattedWord+']';
							break;
						  default:
							formattedWord = formattedWord;
						}
					}
				}
				
				rs.push(formattedWord);


				/*if(s.length > 0) {
					for (var k = 0; k < s.length; k++) {
						if(!$("#double").prop('checked') && i == j)
							continue;
						
						
						var formattedWord = a[i] + a[j] + s[k];
						if(sep != ""  && customSep == ""){
							switch (sep) {
							  case "plus":
								formattedWord = a[i] +'+'+ a[j]+ '+' +s[k];
								break;
							  case "dot":
								formattedWord = a[i] +'.'+ a[j]+ '.' +s[k];
								break;
							 case "comma":
								formattedWord = a[i] +','+ a[j]+ ',' +s[k];
								break;
							case "space":
								formattedWord = a[i] +' '+ a[j]+ ' ' +s[k];
								break;
							  default:
								formattedWord = formattedWord;
							}
						}else{
							formattedWord = a[i] +customSep+ a[j]+ customSep + s[k];
						}
						if(customWrapIn != "" || customWrapOut != ""){
							formattedWord = customWrapIn+formattedWord+customWrapOut;
						}else{
							if(wrap != ""){
								switch (wrap) {
								  case "dblqoutes":
									formattedWord = '"'+formattedWord+'"';
									break;
								  case "smbraces":
									formattedWord = '('+formattedWord+')';
									break;
								 case "sglqoutes":
									formattedWord = "'"+formattedWord+"'";
									break;
								case "lgbraces":
									formattedWord = '['+formattedWord+']';
									break;
								  default:
									formattedWord = formattedWord;
								}
							}
						}
					
						
						rs.push(a[i] + a[j] + s[k]);		
					}
				}*/
			}
		};
		//var newRs = new Array();
		if($("#shuffle").prop('checked'))
		rs = _.shuffle(rs);
		$("#results").html(escapeHtml(rs.join("<br>")));
		$('#ressultSec').show();
		return;
		
	})
})

