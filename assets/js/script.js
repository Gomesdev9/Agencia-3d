window.addEventListener("load" , ()=>{

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

    const videoHero = document.querySelector(".hero video");
    const videoFooter = document.querySelector("footer video");
    videoHero.src = "./assets/img/video-hero.mp4"
    videoHero.autoplay = true;
    videoHero.loop = true;
    videoHero.muted = true;

    videoFooter.src = "./assets/img/video-footer.mp4"
    videoFooter.autoplay = true;
    videoFooter.loop = true;
    videoFooter.muted = true;

    //quando rolo a pagina cada retangulo desce
    gsa.to(".retangulos div", {
        y: 0, 
        scrollTrigger: {
            trigger: ".transicao",
            markers: true,
            scrub: true,
            start: "0% 0%",
            pin: true
        }
    })
})

