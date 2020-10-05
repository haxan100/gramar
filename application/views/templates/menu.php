<div style="clear:both;"></div>
<script>

</script>
</header>


<hr style="margin:0px;">
<div class="container-fluid white-section" style="background:linear-gradient(-145deg,#3ACD99, #0796B6);">
	<div class="container topHContain noP">
		<div class="col-md-12 noP">
			<div class="col-md-12 noP">
				<h1 class="text-white home-heading">
					Empowering <strong style="color:#FFEB3B;">95+</strong><br> Free Online Tools</h1>
				<p class="text16 text-white" style="font-style:italic; padding-bottom:20px;">
					With Over 95 Online Tools, PREPOSTSEO.....
				</p>
				<!-- <div class="sG clear" id="search-banner-sec">
						<input type="search" id="searchInput-banner" class="hS" placeholder="Type to search.">
						<div class="search-resultsHome search-results" style="display:none;">
							<div class="withlangSearch"></div>
							<div class="withoutlangSearch"></div>
							<div class="noresult"></div>
						</div>
					</div> -->
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
			<div class="col-md-12 sib">
				<a href="">
					Space Iklan
				</a>
			</div>

			<script>
			</script>
		</div>
		<div class="col-md-12 noP fts clear">
			<div class="col-md-6 sib">
				<a href="<?= base_url(); ?>Gramar/typo">
					<i class="fa fa-clone"></i>
					Cek Typo
				</a>
			</div>
			<div class="col-md-6 sib">
				<a href="<?= base_url(); ?>Gramar/kamusby/a">
					<i class="fa fa-image"></i> Kamus
				</a>
			</div>
		</div>

		<div class="col-md-12 noP fts clear">
			<div class="col-md-6 sib">
				<a href="<?= base_url(); ?>Gramar/typo">
					<i class="fa fa-clone"></i>
					IKLAN
				</a>
			</div>
			<div class="col-md-6 sib">
				<a href="<?= base_url(); ?>Gramar/kamusby/a">
					<i class="fa fa-image"></i> IKLAN
				</a>
			</div>
		</div>
	</div>
</div>
</div>
<div class="col-xs-12 text-center" style="margin-top:10px;">

</div>


<!--script to draw and close the unit-->
<script async="" type="text/javascript">
	googletag.cmd.push(function() {
		googletag.pubads().addEventListener('slotRenderEnded', function(event) {
			if (event.slot.getSlotElementId() === 'snhb-prepostseo_footer_sticky-0') {
				var elementId = event.slot.getSlotElementId();
				if (document.getElementById(elementId).offsetHeight > 0 && event.isEmpty === false) {
					var stickyAdHeight = document.getElementById(elementId).offsetHeight;
					var wrapperHeight = stickyAdHeight + 25;
					var innerWrapperHeight = stickyAdHeight + 3;

					document.getElementById("floorad-wrapper").setAttribute("style", "text-align:center;z-index:9999;position:fixed;left:0;right:0;display:block;bottom:0;height:" + wrapperHeight + "px;width:100%");
					document.getElementById("close-floorad-btn").setAttribute("style", "display:inline-block;height:18px;;padding:2px;background:#fff;cursor:pointer;float:right;box-shadow: 0 0 4px rgba(0, 0, 0, 0.8);border-radius: 8px 0 0 0;");
					document.getElementById("sticky-ad-background").setAttribute("style", "background:#f2f7f9;height:" + innerWrapperHeight + "px;width:100%;bottom:0;position:fixed;box-shadow: 0 0 4px rgba(0, 0, 0, 0.8);");

					document.getElementById('close-floorad-btn').onclick = function() {
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
