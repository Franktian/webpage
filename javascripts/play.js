			var ballRound = 0;
			$(document).ready(function() {
				for (var i = 0; i < 7; i++) {
					$('#container').append("<div class='columns' id='" + i + "'></div>");
				}

				for (var j = 0; j < 6; j++) {
					if (j == 5) {
						$('.columns').append("<div class='balls' style='background-color:white;' id='" + j +"'></div>");
						break;
					}
					$('.columns').append("<div class='balls' id='" + j + "'></div>");
				}

				$('.balls').mouseover(function(){
					switch($(this).css("background-color")) {
						case "rgb(128, 128, 128)":
							$(this).css("background-color", "red")
							break;
						case "rgb(255, 255, 255)":
							$(this).css("background-color", "green")
							break;
					}
				});

				$('.balls').mouseout(function(){
					switch($(this).css("background-color")) {
						case "rgb(0, 128, 0)":
							$(this).css("background-color", "white")
							break;
						case "rgb(255, 0, 0)":
							$(this).css("background-color", "grey")
							break;
					}
				});

				$('.balls').click(function(){
					if ($(this).css("background-color") == "rgb(0, 128, 0)") {
						if (ballRound == 0) {
							$(this).append("<div class='ball' style='background-color:red'></div>");
							ballRound = 1;
						} else {
							$(this).append("<div class='ball' style='background-color:yellow'></div>");
							ballRound = 0;
						}
						$(".ball").animate({marginTop:'0px'}, 1000);
						var currID = $(this).attr("id");
						$(this).parents().children('.balls').each(function(){
							// Loop through the children of the column div
							if ($(this).attr("id") == currID - 1) {
								$(this).css("background-color", "white");
							}
						});
						$(this).css("background-color", "grey");
					}
				});
			});
