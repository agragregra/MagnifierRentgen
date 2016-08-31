(function ( $ ) {
	$.fn.magnifierRentgen = function() {

		return this.each(function() {

			var th        = $(this),
			dataImage     = th.data("image"),
			dataImageZoom = th.data("image-zoom"),
			dataSize      = th.data("size");

			th
			.addClass("magnifierRentgen")
			.resize(function() {
				th.find(".data-image, .magnifier-loupe img").css({
					"width" : th.width()
				})
			})
			.append(
				"<img class='data-image' src='" + dataImage + "'>"
				+ "<div class='magnifier-loupe'>"
					+ "<img src='" + dataImageZoom + "'>"
				)
				.hover(function() {
					th.find(".magnifier-loupe").stop().fadeIn()
				}, function() {
					th.find(".magnifier-loupe").stop().fadeOut()
				})
				.find(".data-image").css({
					"width" : th.width()
				}).parent().find(".magnifier-loupe").css({
						"width"  : dataSize,
						"height" : dataSize
					})
					.find("img").css({
						"position" : "absolute",
						"width"    : th.width()
					});

			th.mousemove(function(e) {

				var elemPos = {},
					offset  = th.offset();

				elemPos = {
					left : e.pageX - offset.left - dataSize/2,
					top  : e.pageY - offset.top - dataSize/2
				}

				th
				.find(".magnifier-loupe").css({
						"top"  : elemPos["top"],
						"left" : elemPos["left"]
					})
					.find("img").css({
						"top"   : -elemPos["top"],
						"left"  : -elemPos["left"],
						"width" : th.width()
					})

			});

			$(window).resize(function() {
				$(".magnifierRentgen").resize();
			});

		});

		return this;
	};

})(jQuery);
