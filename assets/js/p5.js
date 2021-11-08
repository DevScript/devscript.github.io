// var picPath =
// 	"https://i2.wp.com/10milemusic.com/wp-content/uploads/2018/02/cropped-10-Mile-Logo_BW-SQUARE-4.jpg";

// var sketch = function (p) {
// 	var containerWidth = $("#container-p5").width();
// 	var containerHeight = $("#container-p5").height();

// 	/* eslint-disable */
// 	p5.disableFriendlyErrors = true;
// 	var Stars = [];
// 	var smallSize = 80;
// 	var scaleFactor = (containerWidth * 0.35) / smallSize;
// 	var starsColor = ["#0d2a75", "#1d5cd2", "#1c3498"];
// 	var translate = {
// 		x: containerWidth / 2,
// 		y: (containerHeight - containerWidth * 0.35) / 2,
// 	};
// 	var positions = {
// 		pic: [],
// 	};

// 	var RandomStars = [];

// 	function translatePoint(vector) {
// 		var newX = vector.x * scaleFactor + translate.x;
// 		var newY = vector.y * scaleFactor + translate.y;
// 		var newVec = p.createVector(newX, newY);
// 		return newVec;
// 	}

// 	var center = translatePoint(p.createVector(smallSize / 2, smallSize / 2));

// 	var bgColor = p.color("#000529");

// 	// PARTICLE OF THE IMAGE
// 	function Star(vector) {
// 		this.x = vector.x;
// 		this.y = vector.y;
// 		this.pos = p.createVector(
// 			p.random(containerWidth * -1.2, containerWidth * 1.2),
// 			p.random(containerWidth * -1.2, containerHeight * 1.2)
// 		); // initial position
// 		this.target = p.createVector(this.x, this.y);
// 		this.color = p.random(starsColor);
// 		this.size = p.random(2, 4);
// 		this.vel = p.createVector(p.random(-5, 6), p.random(-4, 6));
// 		this.acc = p.createVector();
// 		this.maxSpeed = 10;
// 		this.maxForce = 2;
// 		this.weight = p.random(0.5, 2.5);
// 		this.allowRepulse = false;
// 		this.goingCenter = false;

// 		this.alpha;
// 	}

// 	Star.prototype.update = function () {
// 		this.pos.add(this.vel);
// 		this.vel.add(this.acc);
// 		this.alpha;
// 		this.acc.mult(0);
// 	};

// 	Star.prototype.move = function () {
// 		var attract = this.attract(this.target);
// 		this.appForce(attract);

// 		var mouse = p.createVector(p.mouseX, p.mouseY);
// 		var repulse = this.repulse(mouse);
// 		this.appForce(repulse);
// 	};

// 	Star.prototype.appForce = function (value) {
// 		this.acc.add(value);
// 	};

// 	Star.prototype.modAlpha = function () {
// 		var desired = p5.Vector.sub(this.target, this.pos);
// 		var d = desired.mag();
// 		var opacity = p.map(d, 0, 800, 255, 0);
// 		return opacity;
// 	};

// 	Star.prototype.attract = function (target) {
// 		var desired = p5.Vector.sub(target, this.pos);
// 		var d = desired.mag(); // distance between target and position
// 		if (d < 100 && !this.goingCenter) {
// 			this.vel.limit(10);
// 			if (d < 10 && !this.allowRepulse) {
// 				var G = 70;
// 				var distancesq = desired.magSq();

// 				var force = distancesq / G;
// 				desired.setMag(force * this.weight);
// 				this.vel.limit(0.7);
// 				return desired;
// 			}
// 		} else {
// 			var G = 400000;
// 			var distancesq = desired.magSq();
// 			var force = G / distancesq;
// 			desired.setMag(force);
// 			this.vel.limit(7);
// 			return desired;
// 		}
// 	};

// 	Star.prototype.repulse = function (target) {
// 		var desired = p5.Vector.sub(target, this.pos);
// 		var d = desired.mag();
// 		if (d < 80) {
// 			this.allowRepulse = true;
// 			var distancesq = desired.magSq();
// 			var force = (500 / distancesq) * this.weight;
// 			desired.setMag(-force);
// 			return desired;
// 		} else {
// 			this.allowRepulse = false;
// 			return p.createVector(0, 0);
// 		}
// 	};

// 	Star.prototype.render = function () {
// 		p.noStroke();
// 		var color = p.color(this.color);
// 		color.setAlpha(this.modAlpha());
// 		p.fill(color);
// 		p.ellipse(this.pos.x, this.pos.y, this.size, this.size);
// 	};

// 	// PARTICLE MOVING RANDOMLY
// 	function RandomStar() {
// 		this.pos = p.createVector(
// 			p.random(containerWidth),
// 			p.random(containerHeight)
// 		);
// 		this.vel = p.createVector(p.random(-3, 3), p.random(-3, 3));
// 		this.weight = p.random(0.5, 1.5);
// 		this.size = p.random(2, 4);
// 		this.corner = p.createVector(0, 0);
// 		this.color = p.color(p.random(starsColor));
// 		this.alpha;
// 	}

// 	RandomStar.prototype.modAlpha = function (dist) {
// 		var alpha = p.map(dist, 0, containerWidth * 0.8, 0, 255);
// 		return alpha;
// 	};

// 	RandomStar.prototype.checkBoundaries = function () {
// 		if (this.pos.x > containerWidth || this.pos.x < 0) {
// 			this.vel.x = this.vel.x * -1;
// 		}
// 		if (this.pos.y > containerHeight || this.pos.y < 0) {
// 			this.vel.y = this.vel.y * -1;
// 		}
// 	};

// 	RandomStar.prototype.update = function () {
// 		this.checkBoundaries();
// 		this.pos.add(this.vel);

// 		var dist = this.pos.sub(this.corner);
// 		this.alpha = this.modAlpha(dist.mag());
// 	};

// 	RandomStar.prototype.render = function () {
// 		var c = this.color;
// 		c.setAlpha(this.alpha);
// 		p.fill(c);
// 		p.ellipse(this.pos.x, this.pos.y, this.size, this.size);
// 	};

// 	// CREATE RANDOMSTAR
// 	for (var i = 0; i < 150; i++) {
// 		var randStar = new RandomStar();
// 		RandomStars.push(randStar);
// 	}

// 	p.setup = function () {
// 		p.createCanvas(containerWidth, containerHeight, "WEBGL");
// 		p.pixelDensity(1);
// 		p.background(bgColor);
// 		var pic = p.loadImage(picPath, function (img) {
// 			// p.image(img, 0, 0);
// 			console.log(img);
// 			pic.resize(smallSize, smallSize);
// 			pic.loadPixels();
// 			for (var x = 0; x < pic.width; x++) {
// 				for (var y = 0; y < pic.height; y++) {
// 					var index = (x + y * pic.width) * 4;
// 					if (pic.pixels[index] < 200) {
// 						// if channel red < 200 == black in this case
// 						if (Math.round(p.random(100)) < 70) {
// 							//get only % of the points, randomly
// 							var initVec = p.createVector(x, y);
// 							var pos = translatePoint(initVec);
// 							positions.pic.push(pos);
// 							Stars.push(new Star(pos));
// 						}
// 					}
// 				}
// 			}
// 		}); // close callback loader image
// 		console.log(pic);
// 		p.pixelDensity();
// 	};

// 	p.draw = function () {
// 		p.background(bgColor);
// 		for (var k = 0; k < Stars.length; k++) {
// 			Stars[k].move();
// 			Stars[k].update();
// 			Stars[k].render();
// 		}
// 		for (var j = 0; j < RandomStars.length; j++) {
// 			RandomStars[j].update();
// 			RandomStars[j].render();
// 		}
// 	};

// 	p.windowResized = function () {
// 		containerWidth = $("#container-p5").width();
// 		containerHeight = $("#container-p5").height();
// 		p.resizeCanvas(containerWidth, containerHeight);
// 	};
// };

// var heroSketch = new p5(sketch, window.document.getElementById("container-p5"));

var tlOpening = new TimelineMax({
	onStart: function () {
		TweenMax.fromTo("#container-p5", 8, { autoAlpha: 0 }, { autoAlpha: 1 });
	},
	delay: 1,
});

tlOpening
	.fromTo(
		".hero h1 span:nth-child(1)",
		1.8,
		{ autoAlpha: 0, y: 20 },
		{ autoAlpha: 1, y: 0, ease: Power2.easeOut },
		2.2
	)
	.fromTo(
		".hero h1 span:nth-child(3)",
		1.8,
		{ autoAlpha: 0, y: 40 },
		{ autoAlpha: 1, y: 0, ease: Power2.easeOut },
		2.4
	)
	.fromTo(
		".hero h2",
		1,
		{ autoAlpha: 0, y: 20 },
		{ autoAlpha: 1, y: 0 },
		3.2
	);

var bigDarkRectangle = anime
	.timeline({
		targets: ".hero-figure-box-05",
		autoplay: false,
		begin: function (anim) {
			smallDarkRectangles.play();
			colouredRectangles.play();
		},
	})
	.add({
		duration: 400,
		easing: "easeInOutExpo",
		scaleX: [0.05, 0.05],
		scaleY: [0, 1],
		perspective: "500px",
	})
	.add({
		duration: 400,
		easing: "easeInOutExpo",
		scaleX: 1,
	})
	.add({
		duration: 800,
		rotateY: "-15deg",
		rotateX: "-8deg",
		rotateZ: "-1deg",
	});

var smallDarkRectangles = anime
	.timeline({
		targets: ".hero-figure-box-06, .hero-figure-box-07",
		autoplay: false,
	})
	.add({
		duration: 400,
		easing: "easeInOutExpo",
		scaleX: [0.05, 0.05],
		scaleY: [0, 1],
		perspective: "500px",
	})
	.add({
		duration: 400,
		easing: "easeInOutExpo",
		scaleX: 1,
	})
	.add({
		duration: 800,
		rotateZ: "20deg",
	});

var colouredRectangles = anime
	.timeline({
		targets:
			".hero-figure-box-01, .hero-figure-box-02, .hero-figure-box-03, .hero-figure-box-04, .hero-figure-box-08, .hero-figure-box-09, .hero-figure-box-10",
		autoplay: false,
	})
	.add({
		duration: anime.random(600, 800),
		delay: anime.random(600, 800),
		rotate: [
			anime.random(-360, 360),
			function (el) {
				return el.getAttribute("data-rotation");
			},
		],
		scale: [0.7, 1],
		opacity: [0, 1],
		easing: "easeInOutExpo",
	});

// Start on load
window.onload = function () {
	$(".hero-figure").waypoint(
		function () {
			setTimeout(function () {
				bigDarkRectangle.play();
			}, 1000);
		},
		{ offset: "50%" }
	);
};
