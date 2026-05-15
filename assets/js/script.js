import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

window.addEventListener("load" , ()=>{
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
            markers: true, //marcaçao visivel na visualizacao 
            scrub: 2,
            start: "0% 0%", // inicio da acao!
            end: "+=3000", 
            pin: true //fixacao na pagina = true
        },
    })

    //quando rolo a pagina cada retangulo desce!
    linhaDoTempo.to(".retangulos div", {
        y: 0,
        stagger: 0.4,
        duration: 4
    }, "-=.2");
    linhaDoTempo.to(".secao2",{
        opacity: 1,
        duration: 0.1
    });
    const Split = new SplitText(".secao2 h2", {
        types: "chars",
        mask: "lines"
    });
    linhaDoTempo.from(Split.chars,{  
        y: 100,
        stagger: 0.1,
        duration:1
    });

    const linhaDoTempo2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".secao4",
            markers: false,
            scrub: 2,
            end: "+=3000",
            pin: true
        }
    })
    const textosSecao4 = document.querySelectorAll(".secao4 h2")

    textosSecao4.forEach(textoH2 => {
        const split2 = new SplitText(textoH2,{
            types:"chars"
        })
        linhaDoTempo2.from(split2.chars,{
            opacity: 0,
            x:40,
            filter:"blur(20px)",
            stagger: {
                each: 0.2,
                from: "random",
            }
        })
        linhaDoTempo2.to(split2.chars,{
            opacity: 0,
            stagger: {
                each: 0.2,
                from: "random",
            }
        }, "+=2")
    });
    //cena
    const cena = new THREE.Scene();
    //camera
    const camera = new THREE.PerspectiveCamera(
        40,
        window.innerWidth/window.innerHeight,
        0.1,
        1000
    );

    camera.position.z = 4;
    //Renderizador
    const renderizador = new THREE.WebGLRenderer();
    renderizador.setSize(window.innerWidth, window.innerHeight);
    const divDiamante = document.querySelector(".divDiamante");
    divDiamante.appendChild(renderizador.domElement);
    
    //Inserir modelo 3d
    const gltfLoader = new GLTFLoader();
    gltfLoader.load("assets/img/diamond-compressed.glb",(objeto)=>{
        const diamante = objeto.scene
        cena.add(diamante);
    });

    function animar(){
        renderizador.render(cena, camera);
        requestAnimationFrame(animar)
    }

    animar()
});


// PLUGIN ScrollSmoother
