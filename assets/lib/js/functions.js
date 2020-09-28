function validateURL(textval) {
	//  regexp =  /^(?:(?:https?|ftp):\/\/)(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
	//  if (regexp.test(textval)){return true;}else{return false;}

	var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
	'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
	'((\\d{1,3}\\.){3}\\d{1,3}))'+ // ip (v4) address
	'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ //port
	'(\\?[;&amp;a-z\\d%_.~+=-]*)?'+ // query string
	'(\\#[-a-z\\d_]*)?$','i');
	return pattern.test(textval);
}
function escapeHtml(text) {var map = {'&':'&amp;','<': '&lt;','>': '&gt;','"': '&quot;',"'": '&#039;'};return text.replace(/[&<>"']/g, function(m) { return map[m]; });}

function windowPopup(url, width, height) {var left = (screen.width / 2) - (width / 2),top = (screen.height / 2) - (height / 2);
window.open(url,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left);
}
$("#crossNS").click(function(){
	var snVal = $("#inputSN").val().trim();
	if(snVal.length > 1){ $("#inputSN").val("");} else { $(".sbNew").removeClass("showB");}
});
$('#searchInput-banner').focusout(function(){
	setTimeout(function(){$('.search-resultsHome').hide();},500);
	
});
$(".topsearch").click(function(){
	if($(".sbNew").hasClass("showB")){$(".sbNew").removeClass("showB");
	} else {
		$(".sbNew").addClass("showB");$("#inputSN").focus();
		$(document).mouseup(function(e){var container = $(".sbNew");
			if (!container.is(e.target) && container.has(e.target).length === 0) { container.removeClass("showB");}
		});
	}
});
$('html').click(function(e) {
  if (e.target.id != 'search-resultsHome' && $(e.target).parents('#knowledge_search .search-resultsHome').length == 0) {
	if($("#knowledge_search .search-resultsHome").is(":visible")){
		$("#knowledge_search .search-resultsHome").html(" ");
		$("#knowledge_search .search-resultsHome").hide();
	}
  }
});

$(function() {$('.lazy').lazy();$('[data-toggle="tooltip"]').tooltip();});

function clearText(t){myStr = t.toLowerCase();myStr = myStr.replace(/ /g,"");myStr = myStr.replace(/[^a-zA-Z0-9]+/g,"");myStr = myStr.replace(/(\s)+/g, "");return myStr;}


function reviewsFn(Pages, ID){
		var rPage = 1;var totalPages = Pages;var requestRunning = 0;var tool_id = ID;
		function fetechReviews(){
			requestRunning = 1;
			$.ajax({
				url : base_url+"ajax/fetchReviews",type:"post",dataType:"json",
				data:{tool_id : tool_id, page: rPage},
				success: function(resp){
					if(typeof resp.error !== 'undefined'){alert("Error in Fetching Reviews");}
					$("#reviewsDisplay").html(resp.ReviewsHtml);requestRunning = 0;
				}
			});
		}
		$("#prevReview").click(function(){
			if($(this).hasClass('disabled')){return false;}
			if(requestRunning == 1){alert("Request already sent");return false;}
			rPage = rPage-1;$("#currentPageNo").html(rPage);
			if(rPage < 2){$(this).addClass('disabled');}
			$("#nextReview").removeClass('disabled');
			fetechReviews();
		});
		$("#nextReview").click(function(){
			if($(this).hasClass('disabled')){return false;}
			if(requestRunning == 1){alert("Request already sent");return false;}
			rPage++;$("#currentPageNo").html(rPage);
			if(rPage >= totalPages){$(this).addClass('disabled');}
			$("#prevReview").removeClass('disabled');
			fetechReviews();
		});
		
		$("#submitReviewBtn").click(function(){
			if($("#submitReviewBtn").hasClass("disabled")){return false;}
			var rating = $("#ratingValue").val();var name = $("input[name=name]").val();var email = $("input[name=email]").val();var review = $("textarea[name=review]").val();
			if(name.length < 3 || email.length < 10 || review.length < 5){alert("Please Fill are required Fields");return false;}
			$("#submitReviewBtn").html('<i class="fa fa-refresh fa-spin"></i> Submiting Your Review').addClass("disabled");
			$.ajax({
				url : base_url+"ajax/addReview",type:"post",
				data:{name : name, email : email, review_details : review, rating : rating, tool_id : ID},dataType:"json",
				success: function(resp){
					if(typeof resp.error !== 'undefined'){alert("Error in Adding Review");return false;}
					
					if(typeof resp.success !== 'undefined'){
						var msgShow = "<h3>Thanks!</h3>";
						msgShow += "<p>Your review Submitted successfully, we will post your review with in 24-48 Hours</p>";
						msgShow += "<p>if you need any help regarding our Tools, please contact us.</p>";
						$("#reviewAddBox").html(msgShow);
					}
				}
			});
		});
	}
var f_no = 1;
function getRandomfact(){
	if($("#refreshFact").hasClass("active")){
		$("#refreshFact").removeClass("active").html('<i class="fa fa-refresh fa-spin"></i> Refreshing..');
		$.ajax({
			url : base_url+"frontend/randomfact?no="+f_no,dataType:"json",
			success: function(resp){
				$("#refreshFact").addClass("active").html('<i class="fa fa-refresh"></i> Refresh');f_no++;
				var factHtml = resp.detail;
				if(typeof resp.source !== "undefined"){
					factHtml += " &mdash; "+resp.source;
				}
				$("#fact-details").hide().html(factHtml).fadeIn(500);
				$("#top-fact-details").hide().html(factHtml).fadeIn(500);
			}
		});
	}
}
var f_no_top = 1;
function getRandomfactTop(){
	
	if($("#refreshFactTop").hasClass("active")){
		$("#refreshFactTop").removeClass("active").html('<i class="fa fa-refresh fa-spin"></i> Refreshing..');
		$.ajax({
			url : base_url+"frontend/randomfact?no="+f_no_top,dataType:"json",
			success: function(resp){
				$("#refreshFactTop").addClass("active").html('<i class="fa fa-refresh"></i> Refresh');f_no_top++;
				var factHtml = resp.detail;
				if(typeof resp.source !== "undefined"){
					factHtml += " &mdash; "+resp.source;
				}
				$("#top-fact-details").hide().html(factHtml).fadeIn(500);
			}
		});
	}
}
if(typeof tool_title !== "undefined"){
		//var feedbacklink = '<span id="feedback" style="float:right; margin-bottom:-10px; cursor:pointer;" class="text-primary"><i class="fa fa-commenting"></i> Send us your feedback</span>';
		//$(".form .text-sec").append(feedbacklink);
		$(".text-sec").on('click', '#feedback', function(){
			var suggestionHtml = '<div class="form-group"><textarea id="feedbackBody"  class="form-control green-bdr" style="resize:none; height:90px; border-radius:0px;" placeholder="Suggestions to improve this tool?"></textarea><br><p class="text-center"><span class="btn btn-success" id="sendfeedback"><i class="fa fa-send"></i> Send feedback</span></p><p class="text-center">Need some help? you can <a href="'+base_url+'contact" target="_blank">contact us</a> anytime.</p></div>';showModel("Send us your feedback!", suggestionHtml);
		});	
		$(".model-box").on('click', "#sendfeedback", function(){
			var toolurl = tool_title;var feedback = $(".model-box").find("#feedbackBody").val();showModel("Send us your feedback!", '<p class="text-center"><i class="fa fa-refresh fa-spin"></i> Submitting your feedback..</p>');
			$.ajax({url : base_url+"frontend/submitfeedback",type:"post",dataType:"json",data:{tool : toolurl, msg : feedback, feedback: 1},
				success: function(resp){
					if(typeof resp.success !== 'undefined'){
						showModel("Thank you!", '<p class="text-center">We have received your feedback. Your opinion is very important to us. <br> <em>THANKS!</em></p>');
					} else {
						showModel("Send us your feedback!", 'Error in submitting your feedback. Pleas send your thought via <a href="'+base_url+'contact" target="_blank">contact us</a> page.');
					}
				}
			});
		});
	}
/**********************
preloaded \ loding icon
**********************/
function showOverlay(){
	$('.loading-overlay').show();
	$("span#submit-spinner").hide();
	$("#preloader").addClass("preloader");
	$('.preloader').prop('disabled', true);
}
function hideOverlay(){
	$('.loading-overlay').hide();
	$("span#submit-spinner").show();
	$('.preloader').removeAttr("disabled");
	$("#preloader").removeClass("preloader");
}
function countTo(obj, limit, durationTime = 500){
	$({countNum: parseInt(obj.text())}).animate({countNum: limit}, {
	  duration: durationTime,
	  easing:'linear',
	  step: function() {
		obj.text(Math.floor(this.countNum)+"%");
	  },
	  complete: function() {
		obj.text(this.countNum+"%");
	  }
	});
}
function search_bar(search,langSearch,parent_id){
	$.ajax({
		url : base_url+"frontend/frontsearchtool",
		type:"post",
		data:{search:search,lang:langSearch},
		success: function(resp){
			$(parent_id).find(' .search-results').show().html(resp);
		}
	});
}

$(document).ready(function(){
	$("#feedback").click(function(){
		$.ajax({
			url:base_url+"frontend/loadFeedback?tool_title="+tool_name,
			beforeSend:function(){
				$("#mainOverlay").show();
			},
			success:function(response){
				$("#mainOverlay").hide();
				$('#loadFeedback').html(response);
			}
		})
	});
	
	$('#improveTool').on('click',function(){
		var text_area_val = $("#improveBody").val();
		var cal_name = tool_name;
		$("#responce_email").html("");
		if(text_area_val == ""){
			$("#improveBody").addClass("border-danger");
			return false;
		}
		if ($("#emailDiv").css('display')=='none') {
			$(".dhide").hide();
			$("#emailDiv").slideDown();
			return false;
		}
		else{
			$(".dhide").show();
			$("#improveBody").removeClass("border-danger");
			$('#improve-captcha').click();
		}
	});
});
var onSubmitImprove = function(response){
	var text_area_val = $("#improveBody").val();
	var cal_name = tool_name;
	var user_email = $("#user_email").val();
	$.ajax({
		url : base_url+"frontend/submitfeedback2",
		method : 'POST',
		dataType : 'json', 
		beforeSend : function() {
			$("#improveTool").html('<i class="fa fa-refresh fa-spin"></i> Sending');
		},
		data: {
			'user_email'	: user_email,
			'msg'	: text_area_val,
			'tool' : cal_name,
			'feedback': cal_name,
			'helpful': $('input[name="helpful"]:checked').val(),
			'gcaptcha' : response
		},
		success:function(resp){
			if(resp.error != undefined){
				$("#improveerrorp").html(resp.error);
			}else{
				$(".improveContainer").html('<p class="text-center p-2 text-md"><i class="fa fa-check fa-3x"></i> <br>Thank your for feedback</p>');
			}
		}
	});
	setTimeout(function(){
	grecaptcha.reset();},3000);
}