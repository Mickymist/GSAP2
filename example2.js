var t1 = gsap.timeline();
t1.from(("#b"),{
    y: -10,
    opacity:0,
    duration: .5,
    delay: 1,
})
t1.from(".c",{
    y: -10,
    opacity:0,
    duration: 1,
    stagger:0.2
    
})
t1.from(("#heading1"),{
    y: 20,
    opacity:-1,
    scale:5,
    duration:2,
    repeat:-1,
    yoyo: true
    

})