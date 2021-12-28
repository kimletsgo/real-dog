$(document).ready(function(){
    // 스크롤 매직, 컨트롤러
var controller = new ScrollMagic.Controller();

// 적용해야하는 애니메이션
var redzone = gsap.to('.second-section>.section2-text>.sec2-t3', {
    scale: 2 , //transform: translateX 의 줄임말
    ease: Linear.easeNone,
    //background-color 같이 '-'가 들어갈경우에는 낙타 표기법으로 써준다 (backgroundColor)
    duration: 0.5 ,
    // 몇초 동안 움직여라
    
});

// 스크롤매직 씬 생성
var scene2 = new ScrollMagic.Scene({
	triggerElement: ".second-section",
  triggerHook:  0.5 , //0~1 ,
  offset: 0,
	duration: "150%",
})

.setTween(redzone) // 애니메이션 등록
.addTo(controller) // 컨트롤러 등록
.addIndicators({   // 트리거 인디케이터 이름지정 및 등록
	name: "1"
});

var tween3 = TweenMax.to('.third-section>.third-sub-wrap>.we-list1', 1, {
    x:"1000",
    ease: Linear.easeNone,
    opacity:1,
    duration: 0.5 ,
    scale:3,
});

var scene3 = new ScrollMagic.Scene({
	triggerElement: ".third-sub-wrap",
  triggerHook: 0.5 ,
  offset: 1000,
	duration: "80%",
})
.setTween(tween3)
.addTo(controller)
.addIndicators({
	name: "2"
});
var tween4 = TweenMax.to('.third-section>.third-sub-wrap>.we-list2', 1, {
    x:"1000",
    ease: Linear.easeNone,
    opacity:1,
    duration: 0.5 ,
});

var scene3 = new ScrollMagic.Scene({
	triggerElement: ".third-sub-wrap",
  triggerHook: 0.5 ,
  offset: 1400,
	duration: "80%",
})
.setTween(tween4)
.addTo(controller)
.addIndicators({
	name: "3"
});

var tween5 = TweenMax.to('.third-section>.third-sub-wrap>.we-list3', 1, {
  x:"1000",
    ease: Linear.easeNone,
    opacity:1,
    duration: 0.5 ,
});

var scene3 = new ScrollMagic.Scene({
	triggerElement: ".third-sub-wrap",
  triggerHook: 0.5 ,
  offset: 1800,
	duration: "80%",
})
.setTween(tween5)
.addTo(controller)
.addIndicators({
	name: "4"
});

var tween6 = TweenMax.to('.third-section>.third-sub-wrap>.we-list4', 1, {
  x:"1000",
    ease: Linear.easeNone,
    opacity:1,
    duration: 0.5 ,
});

var scene3 = new ScrollMagic.Scene({
	triggerElement: ".third-sub-wrap",
  triggerHook: 0.5 ,
  offset: 2100,
	duration: "80%",
})
.setTween(tween6)
.addTo(controller)
.addIndicators({
	name: "5"
});

var tween7 = TweenMax.to('.third-section>.promise', 1, {
  x:"1000",
    ease: Linear.easeNone,
    opacity:1,
    duration: 0.5 ,
});

var scene3 = new ScrollMagic.Scene({
	triggerElement: ".third-sub-wrap",
  triggerHook: 0.5 ,
  offset: 2100,
	duration: "80%",
})
.setTween(tween7)
.addTo(controller)
.addIndicators({
	name: "5"
});
});



$(document).ready(function(){
  console.clear();
    $("#section0 > .right-menu > div").click(function(){
  
  
      var this_num = $(this).attr("data-section");
      var offset = $(this_num).offset();
      console.log( offset );
      $('html, body').animate({scrollTop : offset.top}, 400);
      
    })
  
  });


