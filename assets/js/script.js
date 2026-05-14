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


    const linhaDoTempo = gsap.timeline({
        scrollTrigger: {
            trigger: ".transicao",
            markers: true,
            scrub: 2,
            start: "0% 0%",
            pin: true,
        },
    })
    //quando rolo a pagina cada retangulo desce!
    linhaDoTempo.to(".retangulos div", {
        y: 0,
        stagger: .08, 
    })

    linhaDoTempo.to(".secao2",{
        opacity: 1
    })
    
})


// PLUGIN ScrollSmoother
