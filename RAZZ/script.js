VanillaTilt.init(document.querySelectorAll(".elem"), {
    max: 15,
    speed: 200,
    reverse:true
});
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();


const t1 = gsap.timeline();
t1
    .from("#page1 div h1 span", {
        duration: .5,
        y: 150,
        stagger: 0.5,
    })

    .to("#page1 div img", {
        duration: .5,
        width: "47vw"
    });
const t2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2 ",
        scroller: "#main",
        start: "top 75%",
        end: "bottom bottom",
        // markers: true,
        toggleActions: "play none none reverse",
    }
});
t2
    .from("#left>p,.box", {
        y: 80,
        opacity: 0,
        duration: .5,
        stagger: 1
    }, "anim")

    .from("#page2 .right .img ,.box1", {
        y: 80,
        opacity: 0,
        delay: .5,
        duration: .5,
    }, "anim")

gsap.from("#page2 .right h1", {
    scrollTrigger: {
        trigger: "#page2 ",
        scroller: "#main",
        start: "top 15%",
        end: "bottom bottom",
        // markers: true,
        toggleActions: "play none resume reverse",
    },
    y: 100,
    opacity: 0,
})
const t3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3 ",
        scroller: "#main",
        start: "top 35%",
        end: "bottom bottom",
        // markers: true,
        toggleActions: "play none resume reverse",
    },
})
t3
    .from("#page3 .child2", {
        x: -100,
        opacity: 0,
    }, "anim")
    .from("#page3 .child1", {
        x: 100,
        opacity: 0,
    }, "anim")
gsap.from("#page3 .right h1", {
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start: "40% 30%",
        end: "bottom bottom",
        // markers: true,
    },
    y: 100,
    opacity: 0,
})
gsap.from("#page3 #txt", {
    scrollTrigger: {
        trigger: "#page3 #txt",
        scroller: "#main",
        start: "top 60%",
        end: "top bottom",
        //markers: true,
        toggleActions: "play none resume reverse",
    },
    y: 100,
    opacity: 0,
})
gsap.from("#page4 .elem", {
    scrollTrigger: {
        trigger: "#page4 ",
        scroller: "#main",
        start: "top 50%",
        end: "top bottom",
       // markers: true,
        toggleActions: "play none resume reverse",
    },
    y: 100,
    opacity: 0,
    duration:1,
    stagger:0.2,
})
gsap.from("#page4 .elem .eleming", {
    scrollTrigger: {
        trigger: "#page4 ",
        scroller: "#main",
        start: "top 20%",
        end: "top bottom",
        //markers: true,
        toggleActions: "play none resume reverse",
    },
    y: 100,
    opacity: 0,
    duration:1,
    stagger:0.2,
})
gsap.to("#page5 #page5elem", {
    scrollTrigger: {
        trigger: "#page5 ",
        scroller: "#main",
        start: "top .5%",
        end: "bottom 50%",
       // markers: true,
        toggleActions: "play none resume reverse",
        
    },
    duration:1,
    top:"-100%",
})