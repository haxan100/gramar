
<!DOCTYPE html><html lang="en">
<head>
<meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={licenseKey:"ca07248735",applicationID:"536209715"};window.NREUM||(NREUM={}),__nr_require=function(e,n,t){function r(t){if(!n[t]){var i=n[t]={exports:{}};e[t][0].call(i.exports,function(n){var i=e[t][1][n];return r(i||n)},i,i.exports)}return n[t].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<t.length;i++)r(t[i]);return r}({1:[function(e,n,t){function r(){}function i(e,n,t){return function(){return o(e,[u.now()].concat(c(arguments)),n?null:this,t),n?void 0:this}}var o=e("handle"),a=e(5),c=e(6),f=e("ee").get("tracer"),u=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var d=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],p="api-",l=p+"ixn-";a(d,function(e,n){s[n]=i(p+n,!0,"api")}),s.addPageAction=i(p+"addPageAction",!0),s.setCurrentRouteName=i(p+"routeName",!0),n.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,n){var t={},r=this,i="function"==typeof n;return o(l+"tracer",[u.now(),e,t],r),function(){if(f.emit((i?"":"no-")+"fn-start",[u.now(),r,i],t),i)try{return n.apply(this,arguments)}catch(e){throw f.emit("fn-err",[arguments,this,e],t),e}finally{f.emit("fn-end",[u.now()],t)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,n){m[n]=i(l+n)}),newrelic.noticeError=function(e,n){"string"==typeof e&&(e=new Error(e)),o("err",[e,u.now(),!1,n])}},{}],2:[function(e,n,t){function r(e,n){var t=e.getEntries();t.forEach(function(e){"first-paint"===e.name?d("timing",["fp",Math.floor(e.startTime)]):"first-contentful-paint"===e.name&&d("timing",["fcp",Math.floor(e.startTime)])})}function i(e,n){var t=e.getEntries();t.length>0&&d("lcp",[t[t.length-1]])}function o(e){e.getEntries().forEach(function(e){e.hadRecentInput||d("cls",[e])})}function a(e){if(e instanceof m&&!g){var n=Math.round(e.timeStamp),t={type:e.type};n<=p.now()?t.fid=p.now()-n:n>p.offset&&n<=Date.now()?(n-=p.offset,t.fid=p.now()-n):n=p.now(),g=!0,d("timing",["fi",n,t])}}function c(e){d("pageHide",[p.now(),e])}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var f,u,s,d=e("handle"),p=e("loader"),l=e(4),m=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){f=new PerformanceObserver(r);try{f.observe({entryTypes:["paint"]})}catch(v){}u=new PerformanceObserver(i);try{u.observe({entryTypes:["largest-contentful-paint"]})}catch(v){}s=new PerformanceObserver(o);try{s.observe({type:"layout-shift",buffered:!0})}catch(v){}}if("addEventListener"in document){var g=!1,y=["click","keydown","mousedown","pointerdown","touchstart"];y.forEach(function(e){document.addEventListener(e,a,!1)})}l(c)}},{}],3:[function(e,n,t){function r(e,n){if(!i)return!1;if(e!==i)return!1;if(!n)return!0;if(!o)return!1;for(var t=o.split("."),r=n.split("."),a=0;a<r.length;a++)if(r[a]!==t[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var c=navigator.userAgent,f=c.match(a);f&&c.indexOf("Chrome")===-1&&c.indexOf("Chromium")===-1&&(i="Safari",o=f[1])}n.exports={agent:i,version:o,match:r}},{}],4:[function(e,n,t){function r(e){function n(){e(a&&document[a]?document[a]:document[i]?"hidden":"visible")}"addEventListener"in document&&o&&document.addEventListener(o,n,!1)}n.exports=r;var i,o,a;"undefined"!=typeof document.hidden?(i="hidden",o="visibilitychange",a="visibilityState"):"undefined"!=typeof document.msHidden?(i="msHidden",o="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(i="webkitHidden",o="webkitvisibilitychange",a="webkitVisibilityState")},{}],5:[function(e,n,t){function r(e,n){var t=[],r="",o=0;for(r in e)i.call(e,r)&&(t[o]=n(r,e[r]),o+=1);return t}var i=Object.prototype.hasOwnProperty;n.exports=r},{}],6:[function(e,n,t){function r(e,n,t){n||(n=0),"undefined"==typeof t&&(t=e?e.length:0);for(var r=-1,i=t-n||0,o=Array(i<0?0:i);++r<i;)o[r]=e[n+r];return o}n.exports=r},{}],7:[function(e,n,t){n.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,n,t){function r(){}function i(e){function n(e){return e&&e instanceof r?e:e?f(e,c,o):o()}function t(t,r,i,o){if(!p.aborted||o){e&&e(t,r,i);for(var a=n(i),c=v(t),f=c.length,u=0;u<f;u++)c[u].apply(a,r);var d=s[w[t]];return d&&d.push([b,t,r,a]),a}}function l(e,n){h[e]=v(e).concat(n)}function m(e,n){var t=h[e];if(t)for(var r=0;r<t.length;r++)t[r]===n&&t.splice(r,1)}function v(e){return h[e]||[]}function g(e){return d[e]=d[e]||i(t)}function y(e,n){u(e,function(e,t){n=n||"feature",w[t]=n,n in s||(s[n]=[])})}var h={},w={},b={on:l,addEventListener:l,removeEventListener:m,emit:t,get:g,listeners:v,context:n,buffer:y,abort:a,aborted:!1};return b}function o(){return new r}function a(){(s.api||s.feature)&&(p.aborted=!0,s=p.backlog={})}var c="nr@context",f=e("gos"),u=e(5),s={},d={},p=n.exports=i();p.backlog=s},{}],gos:[function(e,n,t){function r(e,n,t){if(i.call(e,n))return e[n];var r=t();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,n,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return e[n]=r,r}var i=Object.prototype.hasOwnProperty;n.exports=r},{}],handle:[function(e,n,t){function r(e,n,t,r){i.buffer([e],r),i.emit(e,n,t)}var i=e("ee").get("handle");n.exports=r,r.ee=i},{}],id:[function(e,n,t){function r(e){var n=typeof e;return!e||"object"!==n&&"function"!==n?-1:e===window?0:a(e,o,function(){return i++})}var i=1,o="nr@id",a=e("gos");n.exports=r},{}],loader:[function(e,n,t){function r(){if(!x++){var e=E.info=NREUM.info,n=l.getElementsByTagName("script")[0];if(setTimeout(s.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&n))return s.abort();u(w,function(n,t){e[n]||(e[n]=t)});var t=a();f("mark",["onload",t+E.offset],null,"api"),f("timing",["load",t]);var r=l.createElement("script");r.src="https://"+e.agent,n.parentNode.insertBefore(r,n)}}function i(){"complete"===l.readyState&&o()}function o(){f("mark",["domContent",a()+E.offset],null,"api")}function a(){return O.exists&&performance.now?Math.round(performance.now()):(c=Math.max((new Date).getTime(),c))-E.offset}var c=(new Date).getTime(),f=e("handle"),u=e(5),s=e("ee"),d=e(3),p=window,l=p.document,m="addEventListener",v="attachEvent",g=p.XMLHttpRequest,y=g&&g.prototype;NREUM.o={ST:setTimeout,SI:p.setImmediate,CT:clearTimeout,XHR:g,REQ:p.Request,EV:p.Event,PR:p.Promise,MO:p.MutationObserver};var h=""+location,w={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1177.min.js"},b=g&&y&&y[m]&&!/CriOS/.test(navigator.userAgent),E=n.exports={offset:c,now:a,origin:h,features:{},xhrWrappable:b,userAgent:d};e(1),e(2),l[m]?(l[m]("DOMContentLoaded",o,!1),p[m]("load",r,!1)):(l[v]("onreadystatechange",i),p[v]("onload",r)),f("mark",["firstbyte",c],null,"api");var x=0,O=e(7)},{}],"wrap-function":[function(e,n,t){function r(e){return!(e&&e instanceof Function&&e.apply&&!e[a])}var i=e("ee"),o=e(6),a="nr@original",c=Object.prototype.hasOwnProperty,f=!1;n.exports=function(e,n){function t(e,n,t,i){function nrWrapper(){var r,a,c,f;try{a=this,r=o(arguments),c="function"==typeof t?t(r,a):t||{}}catch(u){p([u,"",[r,a,i],c])}s(n+"start",[r,a,i],c);try{return f=e.apply(a,r)}catch(d){throw s(n+"err",[r,a,d],c),d}finally{s(n+"end",[r,a,f],c)}}return r(e)?e:(n||(n=""),nrWrapper[a]=e,d(e,nrWrapper),nrWrapper)}function u(e,n,i,o){i||(i="");var a,c,f,u="-"===i.charAt(0);for(f=0;f<n.length;f++)c=n[f],a=e[c],r(a)||(e[c]=t(a,u?c+i:i,o,c))}function s(t,r,i){if(!f||n){var o=f;f=!0;try{e.emit(t,r,i,n)}catch(a){p([a,t,r,i])}f=o}}function d(e,n){if(Object.defineProperty&&Object.keys)try{var t=Object.keys(e);return t.forEach(function(t){Object.defineProperty(n,t,{get:function(){return e[t]},set:function(n){return e[t]=n,n}})}),n}catch(r){p([r])}for(var i in e)c.call(e,i)&&(n[i]=e[i]);return n}function p(n){try{e.emit("internal-error",n)}catch(t){}}return e||(e=i),t.inPlace=u,t.flag=a,t}},{}]},{},["loader"]);</script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Pre Post SEO : Online SEO Tools</title>
<meta name="description" content="Free Online SEO Tools: plagiarism checker, grammar checker, image compressor, website seo checker, article rewriter, back link checker">
<meta name="Robots" content="INDEX, FOLLOW">
<meta name="Publisher" content="PrePost SEO"><meta name="Revisit-After" content="7 Days"><meta name="Rating" content="General">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link rel="preconnect" href="https://ajax.googleapis.com" crossorigin="">
<link href='https://apis.google.com' rel='preconnect' crossorigin="">
<link href='https://www.gstatic.com' rel='preconnect' crossorigin="">
<link href='https://fonts.googleapis.com' rel='preconnect' crossorigin="">
<link href="imgs\icon-2.png" rel="icon" type="image/x-icon">
<!-- <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet"> -->
<link href="<?= base_url();?>assets\lib\bootstrap\css\bootstrap.min.css" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<link href="<?= base_url();?>assets\lib\theme.css?v=5.7.0.9.3" rel="stylesheet">
<script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'></script>
<script> var googletag = googletag || {}; googletag.cmd = googletag.cmd || []; </script>
<script> var snhb = snhb || {}; snhb.queue = snhb.queue || []; </script> 
<script src="//cdn.snigelweb.com/sncmp/latest/sncmp_stub.min.js" type="text/javascript"></script>
<script>
    __cmp('setLogo', "//www.prepostseo.com/imgs/prepostseo.png", function(result){});
    __cmp('setPrivacyPolicy', "/privacy", function(result){});
</script>
<script async="" type="text/javascript" src="//cdn.snigelweb.com/pub/prepostseo.com/20200430/snhb-prepostseo.com.min.js"></script>
<script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>(adsbygoogle=window.adsbygoogle||[]).pauseAdRequests=1;</script>

<script type="text/javascript">
var base_url = "https://www.prepostseo.com/";
var tool_name = "";

</script>


</head>
<body>
<div class="fw">
    <div class="model-bg"></div><div class="model-box"><span class="model-heading"></span><div class="model-body"> </div> <div class="line"></div> <span class="close-model">X</span><div class="model-footer">If you need any help please <a href="contact.html" target="_blank">contact us</a></div> </div>
<script>
$(".model-bg").click(function(){$(".model-box").hide();$(this).fadeOut(800);});
$(".close-model").click(function(){$(".model-box").hide();$(".model-bg").fadeOut(800);});
function showModel(title, data){$(".model-heading").html(title);$(".model-body").html(data);$(".model-box").fadeIn(500);$(".model-bg").show();}
</script>	
	<header>
    

<div class="container-fluid noP" style="position:relative;">
<div class="container top-bar noP clear">
	<div class="col-sm-9 noP">
  <nav class="navbar nav navbar-default" role="navigation" style="margin-bottom:0;">
  <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
    	<a href="index.htm"><img src="<?= base_url();?>assets\images\prepostseo.png" alt="PrePost SEO" height="36" class="pull-left logo"></a>
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
          </div>
	<style>
		.sponser-link {position:relative;}
		.sponser-link .list-links {width:100%; display:none;position:absolute; z-index:85;background:#fff; padding:5px 0;}
		.sponser-link:hover .list-links {display:block;}
		.sponser-link .list-links a {display:block; padding:4px 7px; border-bottom:1px solid #eee; color:#777; text-align:center;}
		.sponser-link .list-links a:hover {font-weight:700;color:#555;}
    </style>
      
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="navbar-collapse collapse noP col-md-8" id="bs-example-navbar-collapse-1" aria-expanded="false">
      <ul class="nav navbar-nav">
      			        <li class="nav-menu"><a href="plagiarism-checker.html">Plagiarism Checker</a></li>
        <li class="nav-menu"><a href="domain-authority-checker.html">DA Checker</a></li>
        <li class="nav-menu"><a href="paraphrasing-tool.html">Paraphrasing Tool</a></li>
                <li class="nav-menu hidden-xs">
        	<a href="https://www.buysellguestpost.com/marketplace" rel="nofollow sponsored" target="_blank"><i class="fa fa-heart" style="color:#28C63B"></i> Guest Post Service</a>
        </li>
        
        <li class="nav-menu"><a href="plans.html"><i class="fa fa-star text-primary"></i> Premium Plans</a></li>
        
        
        <li class="nav-menu hidden-lg hidden-md hidden-sm"><a href="contact.html"><i class="fa fa-phone"></i> Contact Us</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
	</nav>
    </div>  
     
    <div class="pull-right col-sm-3 col-xs-12 text-right" style="padding:0;" id="searchSec">
    	
                <a href="login.html?register=1" class="logregBtn">Register</a>
        <a href="login-1.html" class="logregBtn">Login</a>
                
        
        <i class="fa fa-search pull-right topsearch"></i>
    </div>	
    </div>
	
	<div class="sbNew">
    	<div class="container">
        	<div class="col-md-12 noP">
            	<div class="col-md-8 col-md-offset-2 noP sbNewinner" id="header_search">
                	<input class="inputSN" id="inputSN" type="search">
                    <span class="cross" id="crossNS">X</span>
                    <div class="search-results" style="display:none;">
						<div class="withlangSearch"></div>
						<div class="withoutlangSearch"></div>
						<div class="noresult"></div>
					</div>
                </div>
            </div>
        </div>
    </div>
</div>

<div style="clear:both;"></div>
<script>
$(".navbar-toggle").click(function(){
	$("#bs-example-navbar-collapse-1").toggleClass("collapse");
});
</script>
    </header>
    	

    <style>
body{background:#FFFFFF !important;}
.home-heading{font-size:48px;font-weight:300}
.hS{background:rgba(255,255,255,0.15);border:1px solid #fff;font-size:16px;display:block;width:100%;border-radius:7px;padding:10px 8px;color:#fff;position:relative;opacity:.8}
input.hS:focus{border-color:#fff!important;outline:none;opacity:1}
input.hS::placeholder{color:#fff;opacity:.5}
input.hS:-ms-input-placeholder{color:#fff;opacity:.5}
input.hS::-ms-input-placeholder{color:#fff;opacity:.5}
.sG{position:relative}
.sG::before{position:absolute;font-family:'FontAwesome';top:1px;right:10px;content:"\f002";color:#fff;font-size:28px;opacity:1}
.fts{margin-top:50px}
.sib{padding:3px}
.sib a{border:1px solid #fff;border-radius:10px;color:#fff;text-align:center;display:block;padding:30px 2px;transition:ease-in-out .15s all;transform:scale(0.95);box-sizing:border-box}
.sib a:hover{transform:scale(1);background:rgba(255,255,255,0.25);color:#fff}
.sib a:hover span{border:1px solid #fff}
.sib a i{font-size:36px;display:block;padding-bottom:10px}
.sib a:hover{opacity:1}
.rfs{color:#fff;text-align:right;padding-top:8px}
.rfs a{width:160px;display:inline-block;text-align:center;height:125px;background:rgba(255,255,255,1);color:#06666F;font-weight:700;margin:2px;float:right}
.rfs a:active,.rfs a:focus{text-decoration:none}
.rfs a .icon{display:block;margin:27px 0 10px}
.rfs a:hover{color:#000;opacity:1}
.rfs a.org .icon{color:#F6AD34}
.rfs a.blue .icon{color:#5AA4E9}
.rfs a.red .icon{color:#FF8585}
.rfs a.prp .icon{color:#9F6A93}
.rfs a .arrow{opacity:0;transition:ease-in-out all .25s;font-size:16px;display:inline-block;padding-right:25px}
.rfs a:hover .arrow{color:#000;opacity:1;padding-right:0}

.sBarN{padding:0 0 0 20px}

.search-resultsHome{background:#fff none repeat scroll 0 0;border:1px solid #CCC;border-top:0;display:none;font-family:"Roboto",sans-serif;font-size:18px;font-weight:300;max-height:250px;min-height:50px;overflow:auto;padding:5px;position:absolute;top:100%;border-bottom-right-radius:5px;border-bottom-left-radius:5px;width:100%;z-index:50}
.search-resultsHome .match{box-sizing:border-box;display:inline-block;padding:2px 5px;width:50%}
.search-resultsHome .match a{background:#fff none repeat scroll 0 0;color:#464646;display:block;font-family:"Roboto",sans-serif;font-size:16px;font-weight:400;background:#F5F9FA;border-radius:3px;padding:8px}
.search-resultsHome .match a:hover{font-weight:400;background:#E7F0F4;color:#000}
@media only screen and (max-width: 768px) {

.fts .sib{width:50%;float:left}
.sBarN{padding:0}
.topHContain{padding:0 8px!important}
.home-heading{font-size:36px}
}
.langBtn {margin:3px;}

</style>
<hr style="margin:0px;">
<div class="container-fluid white-section" style="background:linear-gradient(-145deg,#3ACD99, #0796B6);">  	
    <div class="container topHContain noP">
        <div class="col-md-12 noP">
        	<div class="col-md-6 noP">
            	<h1 class="text-white home-heading">
                Empowering <strong style="color:#FFEB3B;">95+</strong><br> Free Online Tools</h1>
                <p class="text16 text-white" style="font-style:italic; padding-bottom:20px;">
                	With Over 95 Online Tools, PREPOSTSEO Helping Millions of Webmasters, Students, Teachers & SEO Experts Every Month.
                </p>
                <div class="sG clear" id="search-banner-sec">
                    <input type="search" id="searchInput-banner" class="hS" placeholder="Type to search.">
                    <div class="search-resultsHome search-results" style="display:none;">
						<div class="withlangSearch"></div>
						<div class="withoutlangSearch"></div>
						<div class="noresult"></div>
					</div>
            	</div>
                <!--<script>
					$(".hS").keyup(function(){showResultsHome();});
					$(".hS").click(function(){showResultsHome();
						$(document).mouseup(function(e){
							var container = $(".sG");
							if (!container.is(e.target) && container.has(e.target).length === 0) { $(".search-resultsHome").hide();}
						});
					});
					function showResultsHome(){
						var val = clearText($(".hS").val());$(".search-resultsHome").html("");$(".search-resultsHome").hide();
						if(val.length < 2){return false;}$(".search-resultsHome").show();var matches = 0;
						$.each(ToolsArr, function(index, tool){
							var myVal = clearText(tool[0]);
							if(myVal.match(val)){matches++;var href = base_url + tool[2];var re = new RegExp(val,"gi");var toolName = tool[1].replace(re, "<strong>"+val+"</strong>");
								$(".search-resultsHome").append('<span class="match"><a href="'+href+'">'+toolName+ '</a></span>');
							}
						});
						if(matches < 1){$(".search-resultsHome").html("<span class='noresult'>No result found related to your keyword...</span>");}
					}
				</script>-->
               
            </div>
                        <div class="col-md-5 pull-right rfs noP">
            	<div style="width:336px;">
            	<!-- After Title - Responsive -->
<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7155931151667823" data-ad-slot="2628762378" data-ad-format="auto" data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>            	</div>
				            </div>
                        <script>
				function educationTools(){var a=$("#educationTools").offset().top;a-=100,$("html, body").animate({scrollTop:a},500)}function domainTools(){var a=$("#domainTools").offset().top;a-=100,$("html, body").animate({scrollTop:a},500)}function webManage(){var a=$("#webManage").offset().top;a-=100,$("html, body").animate({scrollTop:a},500)}
			</script>
        </div>
        <div class="col-md-12 noP fts clear">
            	<div class="col-md-2 sib">
                	<a href="plagiarism-checker.html">
                    	<i class="fa fa-clone"></i>
                    	Plagiarism Checker
                    </a>
                </div>
                <div class="col-md-2 sib">
                	<a href="reverse-image-search.html">
                    	<i class="fa fa-image"></i>
                    	Reverse Image Search
                    </a>
                </div>
                <div class="col-md-2 sib">
                	<a href="paraphrasing-tool.html">
                    	<i class="fa fa-pencil-square-o"></i>
                    	Paraphrasing Tool
                    </a>
                </div>
                <div class="col-md-2 sib">
                	<a href="grammar-checker.html">
                    	<i class="fa fa-font"></i>
                    	Grammar Checker
                    </a>
                </div>
                <div class="col-md-2 sib">
                	<a href="domain-authority-checker.html">
                    	<i class="fa fa-file-text-o"></i>
                    	Domain Authority Checker
                    </a>
                </div>
                <div class="col-md-2 sib">
                	<a href="word-counter.html">
                    	<i class="fa fa-calculator"></i>
                    	Word Counter
                    </a>
                </div>
                                <div class="col-md-2 sib">
                	<a href="what-is-my-ip.html">
                    	<i class="fa fa-map-marker"></i>
                    	What is My IP
                    </a>
                </div>
                <div class="col-md-2 sib">
                	<a href="guest-posting-sites.html">
                    	<i class="fa fa-list-alt"></i>
                    	1469 Guest Posting Sites
                    </a>
                </div>
                <div class="col-md-2 sib">
                	<a href="ping-multiple-urls-online.html">
                    	<i class="fa fa-feed"></i>
                    	Google Indexer
                    </a>
                </div>
                <div class="col-md-2 sib">
                	<a href="image-to-text.html">
                    	<i class="fa fa-file-text"></i>
                    	Image to Text
                    </a>
                </div>
                <div class="col-md-2 sib">
                	<a href="backlinks-maker.html">
                    	<i class="fa fa-link"></i>
                    	Backlink Maker
                    </a>
                </div>
                <div class="col-md-2 sib">
                	<a href="crop-image-online.html">
                    	<i class="fa fa-crop"></i>
                    	Image Cropper
                    </a>
                </div>
                            </div>
    </div>
</div>    
<div class="col-xs-12 text-center" style="margin-top:10px;">
	
</div>

<div class="container-fluid white-section">  	
    <div class="container noP">
    	
    	<div class="col-md-12 noP">
        <div class="leftcol noP">
        	<div class="col-md-12 tln noP clear" id="educationTools">
        	<h3 class="hh hc1"><i class="fa fa-file-text"></i> Writing & Education</h3>
        	<ul>
            	<li>
                        <a href="plagiarism-checker.html">Plagiarism Checker</a>
                    </li>
                    <li>
                        <a href="word-counter.html">Word Counter</a>
                    </li>
                    <li>
                        <a href="grammar-checker.html">Grammar Checker</a>
                    </li>
                    <li>
                        <a href="article-rewriter.html">Article Re-writer</a>
                    </li>
                    <li>
                        <a href="plagiarism-comparison-search.html">Plagiarism Comparison</a>
                    </li>
                    <li>
                        <a href="verify-backlinks-on-webpages.html">Verify Backlinks</a>
                    </li>
                    <li>
                        <a href="page-comparison.html">Page Comparison</a>
                    </li>
                    <li>
                        <a href="code-to-text-ratio.html">Code to Text Ratio</a>
                    </li>
                    <li>
                        <a href="spell-checker.html">Spell Checker</a>
                    </li>
                    <li>
                        <a href="seo-friendly-urls-checker.html">SEO Friendly URLs checker</a>
                    </li>
                    <li>
                        <a href="keywords-totalwords-ratio.html">Keywords / Total words</a>
                    </li>
                    <li>
                        <a href="keyword-density-checker.html">Keyword Density Checker</a>
                    </li>
                    <li>
                        <a href="text-compare.html">Text Compare</a>
                    </li>
                    <li>
                        <a href="tiny-text-generator.html">Tiny Text Generator</a>
                    </li>
                    
                    <li>
                        <a href="reverse-image-search.html">Reverse Image Search</a>
                    </li>
                    <li>
                        <a href="paraphrasing-tool.html">Paraphrasing Tool</a>
                    </li>
                    <li>
                        <a href="readability-checker.html">Readability Checker</a>
                    </li>
                    <li>
                        <a href="similar-page-checker.html">Similar Page Checker</a>
                    </li>
                    <li>
                        <a href="small-text-generator.html">Small Text Generator</a>
                    </li>
                    <li>
                        <a href="image-to-text.html">Image to Text</a>
                    </li>
                    <li>
                        <a href="line-counter.html">Line Counter</a>
                    </li>
                    <li>
                        <a href="diff-checker.html">Diff Checker</a>
                    </li>
                    <li>
                        <a href="word-combiner.html">Word Combiner</a>
                    </li>
                    <li>
                        <a href="what-is-my-ip.html">What is My IP?</a>
                    </li>
                    
                    
            </ul>
            </div>
            
            <div class="col-md-12 tln noP clear" id="domainTools">
            <h3 class="hh hc2"><i class="fa fa-globe"></i> Domain Tools</h3>
        	<ul>
            	<li>
                        <a href="domain-authority-checker.html">Domain Authority Checker</a>
                    </li>
                    <li>
                        <a href="domain-authority-checker.html">Page Authority Checker</a>
                    </li>
                    <li>
                        <a href="domain-authority-checker.html">Moz Rank Checker</a>
                    </li>
                    <li>
                        <a href="domain-authority-checker.html">Bulk Authority Checker</a>
                    </li>
                    <li>
                        <a href="bulk-domain-age-checker.html">Domain Age Checker</a>
                    </li>
                    <li>
                        <a href="bulk-domain-whois-checker.html">Domain Whois Checker</a>
                    </li>
                    <li>
                        <a href="domain-ip-history-checker.html">Domain Ip History</a>
                    </li>
                    <li>
                        <a href="reverse-ip-domain-checker.html">Reverse IP Domains</a>
                    </li>
                    <li>
                        <a href="reverse-whois-checker.html">Reverse Whois Checker</a>
                    </li>
                    <li>
                        <a href="xml-html-sitemap-generator.html">XML sitemap Generator</a>
                    </li>
                    <li>
                        <a href="google-malware-checker.html">Malware Checker</a>
                    </li>
                    <li>
                        <a href="bulk-alexa-rank-checker.html">Alexa Rank Checker</a>
                    </li>
                    <li>
                        <a href="alexa-rank-comparison.html">Compare Alexa Rank</a>
                    </li>
                    <li>
                        <a href="backlinks-maker.html">Backlinks Maker</a>
                    </li>
                    <li>
                        <a href="social-media-counter.html">Social Media Counter</a>
                    </li>
                    <li>
                        <a href="link-search.html">Blog Search Tool</a>
                    </li>
                    <li>
                        <a href="broken-links-checker.html">Broken Links Checker</a>
                    </li>
                    <li>
                        <a href="google-pagerank-checker.html">Google PR Checker</a>
                    </li>
                    <li>
                        <a href="link-extractor.html">Links Extractor</a>
                    </li>
                    
            </ul>
            </div>
            
            <div class="col-md-12 tln noP clear" id="webManage">
            <h3 class="hh hc3"><i class="fa fa-desktop"></i> Website Management Tool</h3>
        	<ul>
            	<li>
                        <a href="dns-records-checker.html">DNS Records Checker</a>
                    </li>
                    <li>
                        <a href="reverse-ns-checker.html">Reverse NS Checker</a>
                    </li>
                    <li>
                        <a href="dns-report-checker.html">DNS Report</a>
                    </li>
                    <li>
                        <a href="dns-propagation-checker.html">DNS Propagation Checker</a>
                    </li>
                    <li>
                        <a href="server-port-scanner.html">Server Port Scanner</a>
                    </li>
                    <li>
                        <a href="class-c-ip-checker.html">Class C Ip Checker</a>
                    </li>
                    <li>
                        <a href="multiple-ipaddress-location-finder.html">Ip Location</a>
                    </li>
                    <li>
                        <a href="server-status-checker.html">Server Status Checker</a>
                    </li>
                    <li>
                        <a href="ping-domain-from-multiple-locations.html">Different Locations Ping</a>
                    </li>
                    <li>
                        <a href="traceroute-track-domain-locations.html">Traceroute Domain</a>
                    </li>
                    <li>
                        <a href="spider-simulator.html">Spider Simulator</a>
                    </li>
                    <li>
                        <a href="google-index-tool.html">Google Index Tool</a>
                    </li>
                    <li>
                        <a href="google-index-checker.html">Google Index Checker</a>
                    </li>
                    
                    <li>
                        <a href="website-html-viewer.html">Website Page Snooper</a>
                    </li>
                    <li>
                        <a href="url-encoder-decoder.html">Urlencode / Urldecode</a>
                    </li>
                    <li>
                        <a href="html-encoder-decoder.html">HTML Encoder Decoder</a>
                    </li>
                    <li>
                        <a href="domain-ip-lookup.html">Domain IP Lookup</a>
                    </li>
                    <li>
                        <a href="crop-image-online.html">Image Cropper</a>
                    </li>
                    <li>
                        <a href="favicon-generator.html">Favicon Generator</a>
                    </li>
                    <li>
                        <a href="minify-css.html">Minify CSS</a>
                    </li>
                    <li>
                        <a href="minify-js.html">Minify JS</a>
                    </li>
                    <li>
                        <a href="minify-html.html">Minify HTML</a>
                    </li>
                    <li>
                        <a href="minify-json.html">Minify JSON</a>
                    </li>
                    <li>
                        <a href="css-beautifier.html">CSS Beautifier</a>
                    </li>
                    <li>
                        <a href="js-beautifier.html">JS Beautifier</a>
                    </li>
                    <li>
                        <a href="html-beautifier.html">HTML Beautifier</a>
                    </li>
                    <li>
                        <a href="json-beautifier.html">JSON Beautifier</a>
                    </li>
                    <li>
                        <a href="php-beautifier.html">PHP Beautifier</a>
                    </li>
                    <li>
                        <a href="xml-beautifier.html">XML Beautifier</a>
                    </li>
                    
                    <li>
                        <a href="ico-converter.html">ICO Converter</a>
                    </li>
                    <li>
                        <a href="rgb-to-hex.html">RGB to HEX</a>
                    </li>
            </ul>
            </div>
            <div class="col-md-12 tln noP clear" id="webManage">
                <h3 class="hh hc4"><i class="fa fa-desktop"></i> More Tools</h3>
                <ul>
                                        	<li><a href="calc\adsense-calculator.html">Adsense Calculator</a></li>
                                        
                                        	<li><a href="tool\credit-card-validator.html">Credit Card Validator</a></li>
                                        
                                        	<li><a href="tool\reverse-text-generator.html">Reverse Text Generator</a></li>
                                        
                                        	<li><a href="tool\roman-numerals-date-converter.html">Roman Numerals Date Converter</a></li>
                                        
                                        	<li><a href="calc\paypal-fee-calculator.html">Paypal Fee Calculator</a></li>
                                        
                                        	<li><a href="tool\roman-numeral-converter.html">Roman Numeral Converter</a></li>
                                        
                                        	<li><a href="tool\binary-translator.html">Binary Translator</a></li>
                                        
                                        	<li><a href="tool\upside-down-text-generator.html">Upside Down Text Generator</a></li>
                                        
                                        	<li><a href="calc\ltv-calculator.html">LTV Calculator</a></li>
                                        
                                        	<li><a href="tool\text-to-binary-converter.html">Text to Binary</a></li>
                                        
                                        	<li><a href="tool\decimal-to-binary-converter.html">Decimal to Binary</a></li>
                                        
                                        	<li><a href="tool\binary-to-decimal-converter.html">Binary to Decimal</a></li>
                                        
                                        	<li><a href="tool\fake-address-generator.html">Fake Address Generator</a></li>
                                        
                                        	<li><a href="calc\cpc-calculator.html">CPC Calculator</a></li>
                                        
                                        	<li><a href="calc\cpm-calculator.html">CPM Calculator</a></li>
                                        
                                        	<li><a href="calc\discount-calculator.html">Discount Calculator</a></li>
                                        
                                        	<li><a href="tool\hex-to-decimal.html">Hex to Decimal</a></li>
                                        
                                        	<li><a href="tool\decimal-to-hex.html">Decimal to Hex</a></li>
                                        
                                        	<li><a href="tool\credit-card-generator.html">Credit Card Generator</a></li>
                                        
                                        	<li><a href="tool\binary-to-hex.html">Binary to Hex</a></li>
                                        
                                        	<li><a href="tool\hex-to-binary.html">Hex to Binary</a></li>
                                        
                                        	<li><a href="tool\binary-to-octal.html">Binary to Octal</a></li>
                                        
                                        	<li><a href="tool\decimal-to-octal.html">Decimal to Octal</a></li>
                                        
                                        	<li><a href="tool\hex-to-octal.html">Hex to Octal</a></li>
                                        
                                        	<li><a href="tool\octal-to-binary.html">Octal to Binary</a></li>
                                        
                                        	<li><a href="tool\octal-to-decimal.html">Octal to Decimal</a></li>
                                        
                                        	<li><a href="tool\octal-to-hex.html">Octal to Hex</a></li>
                                        
                                        	<li><a href="tool\case-converter.html">Case Converter</a></li>
                                        
                                        	<li><a href="tool\hex-to-rgb.html">HEX to RGB</a></li>
                                        
                                        	<li><a href="calc\binary-calculator.html">Binary Calculator</a></li>
                                        
                                        	<li><a href="calc\hex-calculator.html">Hex Calculator</a></li>
                                        
                                        	<li><a href="calc\octal-calculator.html">Octal Calculator</a></li>
                                        
                                        	<li><a href="tool\ascii-to-text.html">ASCII to Text</a></li>
                                        
                                        	<li><a href="tool\text-to-ascii.html">Text to ASCII</a></li>
                                        
                                        	<li><a href="calc\percentage-calculator.html">Percentage Calculator</a></li>
                                        
                                        	<li><a href="tool\ascii-to-decimal.html">ASCII to Decimal</a></li>
                                        
                                        	<li><a href="tool\ascii-to-hex.html">ASCII to HEX</a></li>
                                        
                                        	<li><a href="tool\decimal-to-ascii.html">Decimal to ASCII</a></li>
                                        
                                        	<li><a href="tool\hex-to-ascii.html">HEX to ASCII</a></li>
                                        
                                        	<li><a href="tool\hex-to-text.html">HEX to TEXT</a></li>
                                        
                                        	<li><a href="tool\text-to-hex.html">Text to HEX</a></li>
                                        
                                        	<li><a href="tool\password-generator.html">Password Generator</a></li>
                                        
                                        	<li><a href="tool\random-name-generator.html">Random Name Generator</a></li>
                                        
                                        	<li><a href="tool\random-word-generator.html">Random Word Generator</a></li>
                                        
                                        	<li><a href="tool\online-text-editor.html">Online Text Editor</a></li>
                                        
                                        	<li><a href="tool\text-to-image.html">Text to Image</a></li>
                                        
                                        	<li><a href="calc\earnings-per-share-calculator.html">Earnings Per  Share Calculator</a></li>
                                        
                                        	<li><a href="calc\probability-calculator.html">Probability Calculator</a></li>
                                        
                                        	<li><a href="calc\margin-calculator.html">Margin Calculator</a></li>
                                        
                                        	<li><a href="calc\sales-tax-calculator.html">Sales Tax Calculator</a></li>
                                        
                                        	<li><a href="calc\gst-calculator.html">GST Calculator</a></li>
                                        
                                        	<li><a href="calc\confidence-interval-calculator.html">Confidence Interval Calculator</a></li>
                                        
                                        	<li><a href="calc\average-calculator.html">Average Calculator</a></li>
                                        
                                        	<li><a href="calc\age-calculator.html">Age Calculator</a></li>
                                        
                                        	<li><a href="calc\pre-and-post-money-valuation-calculator.html">Pre And Post Money Valuation</a></li>
                                        
                                        	<li><a href="tool\words-to-pages.html">Words to Pages</a></li>
                                        
                                        	<li><a href="tool\text-summarizer.html">Text Summarizer</a></li>
                                        
                                    </ul>
            </div>
            <div class="col-xs-12 text-center" style="margin:10px 0 20px 0;">
<span style="font-size:12px;">ADVERTISEMENT</span><br>
<script async="" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- desktop 300x250 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-7155931151667823" data-ad-slot="6131269984"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div>
            <div class="col-md-12 clear" style="border:1px solid #eee;margin-top:30px;">
            	<h2><i class="fa fa-language text-primary"></i> <strong>Tools in other languages</strong></h2>
                <hr>
                <ul class="blist">
                	<li>
                    	<strong>Plagiarism Checker</strong> : Check copy pasted content over the billions of pages and websites. Check true text in your article and assignment. <br>Languages: [ <a href="es\plagiarism-checker.html" target="_blank">ES</a>, <a href="de\plagiarism-checker.html" target="_blank">DE</a>, <a href="fr\plagiarism-checker.html" target="_blank">FR</a>, <a href="br\plagiarism-checker.html" target="_blank">BR</a>, <a href="nl\plagiarism-checker.html" target="_blank">NL</a>, <a href="pl\plagiarism-checker.html" target="_blank">PL</a>, <a href="cs\plagiarism-checker.html" target="_blank">CS</a>, <a href="sv\plagiarism-checker.html" target="_blank">SV</a> ]
                    </li>
                    <li>
                    <strong>Reverse Image Search</strong> : Check similar images from the internet by copy pasting url or by uploading images directly from your PC or mobile. <br>Languages: <a href="es\reverse-image-search.html" target="_blank">ES</a>, <a href="de\reverse-image-search.html" target="_blank">DE</a>, <a href="fr\reverse-image-search.html" target="_blank">FR</a>, <a href="br\reverse-image-search.html" target="_blank">BR</a>, <a href="nl\reverse-image-search.html" target="_blank">NL</a>, <a href="pl\reverse-image-search.html" target="_blank">PL</a>, <a href="it\reverse-image-search.html" target="_blank">IT</a>, <a href="cs\reverse-image-search.html" target="_blank">CS</a>, <a href="sv\reverse-image-search.html" target="_blank">SV</a>, <a href="ru\reverse-image-search.html" target="_blank">RU</a>, <a href="ja\reverse-image-search.html" target="_blank">JA</a>, <a href="ko\reverse-image-search.html" target="_blank">KO</a>, <a href="id\reverse-image-search.html" target="_blank">ID</a>
                    </li>
                    <li>
                    	<strong>Grammar Checker </strong>: Grammar checker helps to write better English. It improves your text by correcting complex expressions & spelling mistakes. <br>Other languages: [ <a href="es\grammar-checker.html">ES</a>, <a href="fr\grammar-checker.html">FR</a>, <a href="br\grammar-checker.html">BR</a>, <a href="it\grammar-checker.html">IT</a>, <a href="nl\grammar-checker.html">NL</a>, <a href="sv\grammar-checker.html">SV</a> ]
                    </li>
                    <li>
                    	<strong>Word Counter</strong>: Count words and characters in your documents. Also check <a href="keyword-density-checker.html" target="_blank">keyword density</a> and <a href="readability-checker.html" target="_blank">readability</a> of your content. <br>
                        Other Languages: [ <a href="es\word-count-character-count-tool.html" target="_blank">ES</a>, <a href="de\word-count-character-count-tool.html" target="_blank">DE</a>, <a href="fr\word-count-character-count-tool.html" target="_blank">FR</a>, <a href="br\word-count-character-count-tool.html" target="_blank">BR</a>, <a href="nl\word-count-character-count-tool.html" target="_blank">NL</a>, <a href="pl\word-count-character-count-tool.html" target="_blank">PL</a>, <a href="it\word-count-character-count-tool.html" target="_blank">IT</a>, <a href="cs\word-count-character-count-tool.html" target="_blank">CS</a>, <a href="tr\word-count-character-count-tool.html" target="_blank">TR</a>, <a href="sv\word-count-character-count-tool.html" target="_blank">SV</a>, <a href="he\word-count-character-count-tool.html" target="_blank">HE</a>, <a href="ru\word-count-character-count-tool.html" target="_blank">RU</a>, <a href="fi\word-count-character-count-tool.html" target="_blank">FI</a>, <a href="ja\word-count-character-count-tool.html" target="_blank">JA</a> ]
                    </li>
                    <li>
                    	<strong>Crop Images Tool</strong>: Prepostseo Crop images tool comes with most useful features including image flipping, zoom in / out, dragging &amp; real-time different sizes display. Other Languages: [ <a href="es\crop-image-online.html" target="_blank">ES</a>, <a href="br\crop-image-online.html" target="_blank">BR</a>]
                    
                    </li>
                    <li>
                    	<strong>Article Rewriter</strong> : Free online article re-writer to spin your text. <a href="paraphrasing-tool.html">Paraphrase online</a> your articles, documents, assignments to prevent plagiarism.
                    </li>
                    <li>
                    	<strong>More Tools</strong> : <a href="tool\index.htm">Checklist of all new tools</a>.
                    </li>
                </ul>
            </div>
        </div>
        <div class="rightcol sBarN">
        	
<div class="col-xs-12 text-center clear noP pps-spr pps-spr-choras-daba pps-spr-sidebar" style="margin:10px 0;">
<span style="font-size:12px;">ADVERTISEMENT</span>
<!--<pre>prepostseo_sidebar_top all:[300,600]/dfp:[300,601]</pre>-->
<div id='snhb-prepostseo_sidebar_top-0'></div>
</div>
                        <div class="col-md-12 clear text-center text16 rbs" style="overflow:hidden;">
            	<h3>Chrome Extension</h3>
                <p>
                	Get our new chrome extension and access all popular seo tools with just one click.
                </p>
                <br>
                <a href="https://chrome.google.com/webstore/detail/prepostseo-tools-for-chro/ijjoomidleehpnpjdknmidmibcbehegc" class="brnb-r" target="_blank" rel="noreferrer nofollow">GET IT FREE</a>
                <img src="imgs\google-chrome-webstore2.png" class="mkimg">
            </div>
                        <div class="col-md-12 clear text16 bps2">
                <h4 class="lh"><strong>Recent Blog Posts</strong></h4>
                <div class="col-md-12 noP">
                	                	<a href="p\all-you-need-to-know-about-link-baiting.html" class="pl">
                		All You Need To Know About Link baiting                    </a>
                                    	<a href="p\types-of-plagiarism.html" class="pl">
                		Types of Plagiarism                    </a>
                                    	<a href="p\consequences-of-plagiarism.html" class="pl">
                		Consequences of Plagiarism                    </a>
                                    	<a href="p\how-to-avoid-plagiarism.html" class="pl">
                		How to avoid plagiarism?                    </a>
                                    </div>
            </div>
                        <div class="col-md-12 clear text-center text16 rbs" style="overflow:hidden;">
                <p>
                	<a href="tool\es\index.htm" class="btn btn-default langBtn">Español</a><a href="tool\de\index.htm" class="btn btn-default langBtn">Deutsche</a><a href="tool\fr\index.htm" class="btn btn-default langBtn">Français</a><a href="tool\br\index.htm" class="btn btn-default langBtn">Português</a><a href="tool\nl\index.htm" class="btn btn-default langBtn">Nederlands</a><a href="tool\pl\index.htm" class="btn btn-default langBtn">Polskie</a><a href="tool\it\index.htm" class="btn btn-default langBtn">italiano</a><a href="tool\cs\index.htm" class="btn btn-default langBtn">čeština</a><a href="tool\tr\index.htm" class="btn btn-default langBtn">Türk</a><a href="tool\sv\index.htm" class="btn btn-default langBtn">Svenska</a><a href="tool\he\index.htm" class="btn btn-default langBtn">עברית</a><a href="tool\ru\index.htm" class="btn btn-default langBtn">русский</a><a href="tool\fi\index.htm" class="btn btn-default langBtn">Suomalainen</a><a href="tool\ja\index.htm" class="btn btn-default langBtn">日本人</a><a href="tool\ro\index.htm" class="btn btn-default langBtn">Română</a><a href="tool\id\index.htm" class="btn btn-default langBtn">Indonasian</a><a href="tool\ko\index.htm" class="btn btn-default langBtn">한국어</a><a href="tool\ga\index.htm" class="btn btn-default langBtn">Gaeilge</a><a href="tool\th\index.htm" class="btn btn-default langBtn">ไทย</a><a href="tool\ro\index.htm" class="btn btn-default langBtn">Română</a><a href="tool\da\index.htm" class="btn btn-default langBtn">dansk</a><a href="tool\hr\index.htm" class="btn btn-default langBtn">Hrvatski</a><a href="tool\ar\index.htm" class="btn btn-default langBtn">العربية</a><a href="tool\fi\index.htm" class="btn btn-default langBtn">Suomalainen</a>                </p>
            </div>
            
                    </div>
        </div>
    </div>
</div>        
      

<div id='floorad-wrapper'>
   <a id='close-floorad-btn' style="display: none;">&#10006;</a>
   <div id='sticky-ad-background'></div>
   <div id='snhb-prepostseo_footer_sticky-0' style="margin: 0 auto !important;position:fixed;bottom:0;left:0;right:0;"></div>
</div>

<!--script to draw and close the unit-->
<script async="" type="text/javascript">
   googletag.cmd.push(function() {
      googletag.pubads().addEventListener('slotRenderEnded', function(event){
         if(event.slot.getSlotElementId() === 'snhb-prepostseo_footer_sticky-0') {
            var elementId = event.slot.getSlotElementId();
            if (document.getElementById(elementId).offsetHeight > 0 && event.isEmpty === false) {
               var stickyAdHeight = document.getElementById(elementId).offsetHeight;
               var wrapperHeight = stickyAdHeight + 25;
               var innerWrapperHeight = stickyAdHeight + 3;

               document.getElementById("floorad-wrapper").setAttribute("style", "text-align:center;z-index:9999;position:fixed;left:0;right:0;display:block;bottom:0;height:"+wrapperHeight+"px;width:100%");
               document.getElementById("close-floorad-btn").setAttribute("style", "display:inline-block;height:18px;;padding:2px;background:#fff;cursor:pointer;float:right;box-shadow: 0 0 4px rgba(0, 0, 0, 0.8);border-radius: 8px 0 0 0;");
               document.getElementById("sticky-ad-background").setAttribute("style", "background:#f2f7f9;height:"+innerWrapperHeight+"px;width:100%;bottom:0;position:fixed;box-shadow: 0 0 4px rgba(0, 0, 0, 0.8);");

               document.getElementById('close-floorad-btn').onclick = function(){
                  document.getElementById("floorad-wrapper").setAttribute("style", "display:none;");
                  document.getElementById("close-floorad-btn").setAttribute("style", "display:none;");
                  document.getElementById("sticky-ad-background").setAttribute("style", "display:none;");
               };
            } else {
               document.getElementById("floorad-wrapper").setAttribute("style", "display:none;");
               document.getElementById("close-floorad-btn").setAttribute("style", "display:none;");
               document.getElementById("sticky-ad-background").setAttribute("style", "display:none;");
            }
         }
      });
   });
</script>
<!--end script to draw and close the unit-->


    <footer>
    	<div class="container">   
    <div class="col-sm-12" style="padding:10px 0px;">
    	<div class="col-sm-4 noP" style="padding-right:20px;">
        	<img src="imgs\prepostseo-logo-white.png" height="30" alt="prepostseo">
            <hr>
            <p>By Developing 75+ online tools for students, writers and SEO experts, PREPOSTSEO is one of the top free tools websites.</p>
            <p>2019 &copy; PrePost SEO</p>
            <img src="imgs\ssl-badge.png" width="120" alt="Prepostseo SSL"> 
        	 
        </div>
         
        <div class="col-sm-5 noP" style="padding-right:20px;">
        	<p class="fh">Prepostseo Services</p> <hr style=" margin:10px 0;"> <a style="color:#3ACD99;" href="blog\index.htm"><strong>PREPOSTSEO BLOG</strong></a><a href="plagiarism-checker-api.html">Plagiarism APIs</a><a href="https://wordpress.org/plugins/prepost-seo/" target="_blank" rel="nofollow noreferrer">Wordpress PrePost SEO Plugin</a><a href="seo-tools-widgets.html">SEO Tools Widgets</a><a href="tool\index.htm">More Tools</a>
            <hr style=" margin:10px 0;">
            <a href="https://www.facebook.com/prepostseo/" target="_blank" class="fbtn"><i class="fa fa-facebook"></i></a>
            <a href="https://twitter.com/prepostseo" target="_blank" class="fbtn"><i class="fa fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/prepostseo/" target="_blank" class="fbtn"><i class="fa fa-linkedin"></i></a>
            <a href="https://play.google.com/store/apps/developer?id=prepostseo.com" target="_blank" class="fbtn"><i class="fa fa-android"></i></a>
            <a href="https://apps.apple.com/us/app/plagiarism-checker-prepostseo/id1463941368" target="_blank" class="fbtn"><i class="fa fa-apple"></i></a>
        </div>
        <div class="col-sm-3 noP" style="padding-right:20px; padding-bottom:80px;">
        	
        	<p class="fh">Resources</p> <hr style=" margin:10px 0;"> <a href="about.html">About us</a><a href="contact.html">Contact us </a><a href="advertise.html">Advertise</a><a href="faqs.html">FAQs</a><a href="privacy-policy.html">Privacy Policy</a><a href="refund-policy.html">Refund Policy</a><a href="terms-of-use.html">Terms of use</a>
        </div>      
            </div>
</div>

<script>
function cookieAccepted(){
	$("#consent").hide();
	var date = new Date()
	date.setTime(date.getTime() + 316224000);
	var expString = "; expires=" + date.toGMTString();
	document.cookie = "cookieAccepted=1" + expString + " path=/;";
}
</script>
<div style="width:100%; position:fixed; z-index:100; background:rgba(0,0,0,0.80); color:#E0E0E0;display:block;bottom:0; padding:10px;font-size:12px;text-align:center;" id="consent">
	By clicking "Accept" or continuing to use our site, you agree to our Privacy Policy for Website.  <span class="btn btn-default" onclick="cookieAccepted();">Accept</span> <a class="btn btn-default" href="privacy-policy.html" target="_blank">Privacy Policy</a>
</div>

<div class="bg-dark" style="display:none"></div>

<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-67516616-1', 'auto');ga('send', 'pageview');
</script>

<script src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
if (!adsbygoogle.loaded) {
	$('body .text-sec .btn-success').unbind( "click" ).attr("onclick","showDabay2()").attr("id","newone");
}

function showDabay2(){
	$.ajax({
		url : "https://www.prepostseo.com/frontend/adblockerView",
		data : {'url':"https://www.prepostseo.com/"},
		success: function(resp){
			var MsgB = resp;
			if(typeof tool_title !== 'undefined'){
				$(".bg-dark").html(MsgB).show();
			}
			$(".bg-dark").on('click', '.gotit', function(){$(".bg-dark").hide();});
			return false;
		}
	});

}
</script>

 

<script src="https://use.fontawesome.com/43844833b2.js"></script>
<script src="assets\lib\js\functions.js?v=10"></script>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

<script type="application/javascript">
$("#header_search #inputSN").on("keyup" , function(){
	var search = $(this).val();
	var langSearch = "en";
	if(search.length < 2){
		return false;
	}
	search_bar(search,langSearch,"#header_search");
});
$("#searchInput-banner").on("keyup" , function(){
	var search = $("#search-banner-sec #searchInput-banner").val();
	var langSearch = "en";
	if(search.length < 2){
		return false;
	}
	search_bar(search,langSearch,"#search-banner-sec");
});
</script>

    </footer>
    <div id="loadFeedback"></div>
</div>
<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"ca07248735","applicationID":"536209715","transactionName":"YldTZxcHXUZSWxELXVsdcFARD1xbHH4XDVxBd19XSg9dUVZA","queueTime":0,"applicationTime":3,"atts":"ThBQEV8dTkg=","errorBeacon":"bam.nr-data.net","agent":""}</script></body>
</html>
