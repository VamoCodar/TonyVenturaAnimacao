 //var videoHeight = document.querySelector("#video").getBoundingClientRect.height
 let video = document.querySelector("#video")
 let wrapper = document.querySelector(".wrapper")
 let celular = document.querySelector(".celular")
 let body = document.querySelector("body")
 //controlador
 let controller = new ScrollMagic.Controller();
 //timeline
 const timeline = new TimelineMax();
 const animationResize = new TimelineMax();

 let scaleVariable;
 let xInicial;

 let tela = window.innerWidth;

 
 //verificação scale
 function scale() {
     if (tela <= 400) {
         scaleVariable = 2.5
         xInicial = 0
     } else if (tela <= 540) {
         scaleVariable = 3
         xInicial = 0
        
         
     } else if (tela <= 720) {
         scaleVariable = 4
         xInicial = -100

     } else if (tela <= 1100) {
         scaleVariable = 6
         xInicial = 0
     } else if (tela <= 1366) {
         xInicial = 250
         scaleVariable = 9
     } else if (tela <= 1600) {
         scaleVariable = 12
         xInicial = 300
     } else if (tela <= 2000) {
         scaleVariable = 13
         xInicial = 150
     } else if (tela >= 2000) {
         scaleVariable = 13
         xInicial = 200
     }

 }
 scale()




 //wrapper celular


 //estado inicial do celular
 gsap.set(".secao__celular", {
     scale: scaleVariable, //SCALA QUE O celular recebe
     x: xInicial,
 })

 //scala final
 animationResize
     .to(".secao__celular", {
         scale: 1,
         x: 0,

     });

 //estado inicial titulo
 let inicial = TweenMax.set("#text-principal", {
     y: 0,

 });


 let menuAnimation =
     new TimelineMax()
     .from(".menu a", .3, {
         y: -100,
         opacity: 1,
     })
     .staggerFrom(".menu ul li", .3, {
         y: -100,
         opacity: 1,
     }, .05, "-=0.2")


 //text estado final
 const resizeText = TweenMax.to("#text-principal",.3, {
     y: -300,
     opacity: 0,
     scale: 0.7,
     ease: "expo.out",
 });

 //video mobile



 //fixado
 var sceneFix = new ScrollMagic.Scene({
         triggerElement: "#trigger1",
         duration: 1400,
         offset: -10,
         triggerHook: 0,
     })
     .addIndicators({
         name: "fixo"
     })
     .setPin(".wrapper", {
         pushFollowers: false,
         spacerClass: "#trigger1",
     })

 //cena celular
 var sceneScale = new ScrollMagic.Scene({
         triggerElement: "#trigger1",
         duration: 800,
         offset: 400,
         triggerHook: 0,

     })

     .setTween(animationResize)
     .addIndicators({
         name: "RESIZE celular"
     });


 //CENA titulo
 var sceneTitle = new ScrollMagic.Scene({
         triggerElement: "#trigger1",
         duration: 0,
         offset: 100,
         triggerHook: 0,
     })
     .setClassToggle("#high3", "active") // add class toggle
     .setTween(resizeText)
     .addIndicators({
         name: "RESIZE text"
     })

 //classe
 var sceneClass = new ScrollMagic.Scene({
         triggerElement: "#trigger1",
         duration: 0,
         offset: 1300,
         triggerHook: 0,

     })
     .setClassToggle("body", "active")
     .addIndicators({
         name: "body"
     })
     .setTween(menuAnimation)


 //controlador
 controller.addScene([
     sceneFix,
     sceneScale,
     sceneTitle,
     sceneClass,

 ]);


 // window.addEventListener("resize", restart1)
 window.addEventListener("resize", scale)
 //window.addEventListener("scroll", dataMenu)