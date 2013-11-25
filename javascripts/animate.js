		$(document).ready(function(){
			stage.draw();
			writeMessage(canvas, "HTML", 5, 105);
			writeMessage(canvas, "JavaScript", 235, 105);
			writeMessage(canvas, "PHP", 135, 25);
			writeMessage(canvas, "CSS", 175, 225);
			writeMessage(canvas, "SQL", 65, 225);
			$("#javascript").animate({width:'440px'}, 1000);
			$("#php").animate({width:'400px'}, 1000);
			$("#html").animate({width:'375px'}, 1000);
			$("#sql").animate({width:'384px'}, 1000);
			$("#css").animate({width:'330px'}, 1000);
		});
		var stage = new Kinetic.Stage({
			container: 'container',
			width: 300,
			height: 250,
		});
		
		var layer = new Kinetic.Layer();
		var messageLayer = new Kinetic.Layer();
		var canvas = messageLayer.getCanvas();
		var background = new Kinetic.Rect({
			x: 0,
			y: 0,
			width: stage.getWidth(),
			height: stage.getHeight(),
			stroke: 'black',
			strokeWidth: 2
		});
		var skills = new Kinetic.Polygon({
			points: [100*Math.cos(Math.PI/10) + 130, -100*Math.sin(Math.PI/10) + 130, 130, 30, 100*Math.cos(Math.PI*9/10) + 130, -100*Math.sin(Math.PI*9/10) + 130,100*Math.cos(Math.PI*13/10) + 130, -100*Math.sin(Math.PI*13/10) + 130, 100*Math.cos(Math.PI*17/10) + 130, -100*Math.sin(Math.PI*17/10) + 130],
			fill: '#00D2FF',
			stroke: 'black',
			strokeWidth: 2
		});
		layer.add(skills);
		var current = new Kinetic.Polygon({
			points: [88*Math.cos(Math.PI/10) + 130, -88*Math.sin(Math.PI/10) + 130, 130, 50, 75*Math.cos(Math.PI*9/10) + 130, -75*Math.sin(Math.PI*9/10) + 130,77*Math.cos(Math.PI*13/10) + 130, -77*Math.sin(Math.PI*13/10) + 130, 63*Math.cos(Math.PI*17/10) + 130, -63*Math.sin(Math.PI*17/10) + 130],
			fill: 'yellow',
			opacity: 0.5,
			stroke: 'black',
			strokeWidth: 2
		});
		layer.add(current);
		
		
		for (var i = 0; i < 5; i++) {
			var javascript = new Kinetic.Circle({
				x: (100 - i*20)*Math.cos(Math.PI*1/10) + 130,
				y:  -(100 - i*20)*Math.sin(Math.PI*1/10) + 130,
				radius: 3,
				fill: 'red'
			});
			layer.add(javascript);
		
			var php = new Kinetic.Circle({
				x: (100 - i*20)*Math.cos(Math.PI*5/10) + 130,
				y:  -(100 - i*20)*Math.sin(Math.PI*5/10) + 130,
				radius: 3,
				fill: 'red'
			});
			layer.add(php);
		
			var html = new Kinetic.Circle({
				x: (100 - i*20)*Math.cos(Math.PI*9/10) + 130,
				y:  -(100 - i*20)*Math.sin(Math.PI*9/10) + 130,
				radius: 3,
				fill: 'red'
			});
			layer.add(html);
			
			var sql = new Kinetic.Circle({
				x: (100 - i*20)*Math.cos(Math.PI*13/10) + 130,
				y:  -(100 - i*20)*Math.sin(Math.PI*13/10) + 130,
				radius: 3,
				fill: 'red'
			});
			layer.add(sql);
			
			var css = new Kinetic.Circle({
				x: (100 - i*20)*Math.cos(Math.PI*17/10) + 130,
				y:  -(100 - i*20)*Math.sin(Math.PI*17/10) + 130,
				radius: 3,
				fill: 'red'
			});
			layer.add(css);
			
			
		}
		var center = new Kinetic.Circle({
			x: 130,
			y: 130,
			radius: 5,
			fill: 'grey'
		});
		layer.add(center);
		stage.add(layer);
		stage.add(messageLayer);
		
		function writeMessage(canvas, message, x, y) {
			var context = canvas.getContext('2d');
			context.font = '18pt Calibri';
			context.fillStyle = 'black';
			context.fillText(message, x, y);
		}
