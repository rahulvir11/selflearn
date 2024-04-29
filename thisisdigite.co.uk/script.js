gsap.from("#img1", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
    y: 60
})
gsap.from("#img2", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
    x: 60
})
gsap.from("#img3", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
    y: -60
})
gsap.from("#page1 h1", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
});

gsap.from("#page2 .text h1,h2", {
    scrollTrigger: {
        trigger: "#page2 .text",
        scroller: "body",
        start: "top 60%",
        // markers:" ture",
        
    },
    opacity: 0,
   duration:1,
});
gsap.from("#page2 .text h3", {
    scrollTrigger: {
        trigger: "#page2 .text",
        scroller: "body",
        start: "top 50%",
        // markers:" ture",
    },
    opacity: 0,
    duration:1,
});
gsap.from("#page3 #left", {
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 60%",
        // markers:" ture",
    },
    opacity: 0,
    duration: .5,
});
gsap.from("#page3 #right ", {
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 60%",
        // markers:" ture",
        
    },
    opacity: 0,
    duration:.5
});
gsap.from("#page4 #leftside", {
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 40%",
        // markers:" ture",
    },
    opacity: 0,
    duration: .5,
});
gsap.from("#page4 #rightside ", {
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 40%",
        // markers:" ture",
       
        //scrub:0-5
        
    },
    opacity: 0,
    duration:.5
     //stagger: true/false
});