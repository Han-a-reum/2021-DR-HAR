// 스크롤
$('body').niceScroll({
  scrollspeed: 10,
  cursorcolor : "#424242;"
});

// 데일리루틴집
gsap.to('.bn_1_3', {
  y:250,
  duration:2,
  opacity:1,
  delay:0.5,
  scrollTrigger:{
    trigger:'.bn_1_3',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

//풀
gsap.to('.bn_1_2', {
  y:250,
  duration:2,
  scrollTrigger:{
    trigger:'.bn_1_2',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

//구름
gsap.to('.bn_1_1', {
  x:230,
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.bn_1_1',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

//발
gsap.to('.bn_1_4_0', {
  x:30,
  delay:0.4,
  duration:2,
  scrollTrigger:{
    trigger:'.bn_1_4_0',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

gsap.to('.bn_1_4_3', {
  x:30,
  delay:0.6,
  duration:2,
  scrollTrigger:{
    trigger:'.bn_1_4_3',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

gsap.to('.bn_1_4_1', {
  x:30,
  delay:0.2,
  duration:2,
  scrollTrigger:{
    trigger:'.bn_1_4_1',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

gsap.to('.bn_1_4_2', {
  x:30,
  delay:0.8,
  duration:2,
  scrollTrigger:{
    trigger:'.bn_1_4_2',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

//바다
gsap.to('.bg_1_1_2', {
  y:-300,
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.bg_1_1_2',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

//프로젝트골
gsap.to('.txt_1_3', {
  y:-100,
  delay:0.8,
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_1_3',
    markers:false,
    start:'50% 50%',
    end:'80% 30%',
  },
});

//오버뷰
gsap.to('.txt_1_1', {
  x:-200,
  delay:0.3,
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_1_1',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});


//페르소나
gsap.to('.txt_1_2', {
  x:-200,
  delay:0.3,
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_1_2',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

//디자인시스템
gsap.to('.txt_2_1', {
  opacity:1,
  delay:0.3,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_2_1',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

gsap.to('.txt_2_2', {
  opacity:1,
  delay:0.8,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_2_2',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

//시작화면
gsap.to('.txt_2_3', {
  x:-100,
  delay:0.8,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_2_3',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

//로그인화면
gsap.to('.txt_3_2', {
  y:200,
  delay:0.5,
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_3_2',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

//스플래쉬
gsap.to('.txt_4_1_0', {
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_4_1_0',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

gsap.to('.txt_4_1_1', {
  opacity:1,
  delay:0.4,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_4_1_1',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

gsap.to('.txt_4_1_2', {
  delay:0.8,
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_4_1_2',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});


// 홈화면 루틴탭 아래
gsap.to('.txt_5_2_1', {
  y:100,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_5_2_1',
    markers:false,
    start:'50% 50%',
    end:'80% 30%',
  },
});

//메모탭 꾹
gsap.to('.txt_5_3', {
  delay:0.8,
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_5_3',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

//즐겨찾기밑줄
gsap.to('.txt_7_2_1', {
  delay:0.2,
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_7_2_1',
    markers:false,
    start:'50% 50%',
    end:'80% 30%',
  },
});

//습관등록 배경
gsap.to('.txt_6_1_1', {
  delay:0.8,
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_6_1_1',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

//달력탭들
gsap.to('.txt_8_1_1', {
  x:100,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_8_1_1',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

gsap.to('.txt_8_1_2', {
  x:100,
  delay:0.6,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_8_1_2',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

//메모들
gsap.to('.txt_9_1_0', {
  x:100,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_9_1_0',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

gsap.to('.txt_9_1_1', {
  x:100,
  delay:0.4,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_9_1_1',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

gsap.to('.txt_9_1_2', {
  x:100,
  delay:0.7,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_9_1_2',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

//환경설정들
gsap.to('.txt_11_1_0', {
  y:100,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_11_1_0',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

gsap.to('.txt_11_1_1', {
  y:100,
  delay:0.3,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_11_1_1',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

gsap.to('.txt_11_1_2', {
  y:100,
  delay:0.6,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_11_1_2',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

gsap.to('.txt_11_1_3', {
  y:100,
  delay:0.9,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_11_1_3',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});

//다크모드
gsap.to('.txt_12_3', {
  y:200,
  delay:0.2,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_12_3',
    markers:false,
    start:'50% 50%',
    end:'80% 30%',
  },
});

//다크모드집
gsap.to('.txt_12_2', {
  y:200,
  delay:0.2,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_12_2',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});