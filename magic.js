$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

$(".section-header").each(function(){
	// build a scene
	var sceneOne = new ScrollMagic.Scene({
		triggerElement: this,
    reverse: false
	})
	.setClassToggle(this, "fade-in")
	.addTo(controller);
});

// parallax scene
var slideParallaxScene = new ScrollMagic.Scene({
  triggerElement: "#header-primary",
  triggerHook: 1,
  duration: "200%"
})
.setTween(TweenMax.from("#about", 1, {y: "-20%", ease: Power0.easeNone}))
.addTo(controller);

// var slideParallaxSceneOne = new ScrollMagic.Scene({
//   triggerElement: "#headshot-section",
//   triggerHook: 1,
//   duration: "150%"
// })
// .setTween(TweenMax.from("#team", 1, {y: "-20%", ease: Power0.easeNone}))
// .addTo(controller);

// var slideParallaxSceneTwo = new ScrollMagic.Scene({
//   triggerElement: ".portfolio-text",
//   triggerHook: 1,
//   duration: "100%"
// })
// .setTween(TweenMax.from("#portfolio", 1, {y: "-50%", ease: Power0.easeNone}))
// .addTo(controller);

});
