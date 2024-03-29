
function videoconAnimation() {
    
    var videocon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#video-cursor");

    videocon.addEventListener("mouseenter",()=>{
        gsap.to(playbtn,{
            scale:1,
            opacity:1
        })
    })

    videocon.addEventListener("mouseleave",()=>{
        gsap.to(playbtn,{
            scale:0,
            opacity:0
        })
    })

    videocon.addEventListener("mousemove",(dets)=>{
        gsap.to(playbtn,{
            left : dets.x-70,
            top : dets.y-80
        })
    })


}

videoconAnimation()

gsap.from("#page1 h1",{
    y:100,
    opacity: 0,
    delay: 0.5,
    duration : 0.9,
    stagger : 0.3
})

gsap.from("#page1 #video-container",{
    scale:0.9,
    opacity:0,
    delay:1.3,
    duration:0.3
})