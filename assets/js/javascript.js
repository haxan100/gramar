
			$(".navbar-toggle").click(function () {
				$("#bs-example-navbar-collapse-1").toggleClass("collapse");
			});
	$(".model-bg").click(function() {
		$(".model-box").hide();
			$(this).fadeOut(800);
		});
		$(".close-model").click(function() {
		$(".model-box").hide();
			$(".model-bg").fadeOut(800);
		});

		function showModel(title, data) {
		$(".model-heading").html(title);
			$(".model-body").html(data);
			$(".model-box").fadeIn(500);
			$(".model-bg").show();
		}

					function educationTools() {
						var a = $("#educationTools").offset().top;
						a -= 100, $("html, body").animate({
		scrollTop: a
						}, 500)
					}

					function domainTools() {
						var a = $("#domainTools").offset().top;
						a -= 100, $("html, body").animate({
		scrollTop: a
						}, 500)
					}

					function webManage() {
						var a = $("#webManage").offset().top;
						a -= 100, $("html, body").animate({
		scrollTop: a
						}, 500)
					}
