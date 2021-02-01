import hamburgerMenu from "./dom/1_menu_hamburguesa.js";
import scrollTopButton from "./dom/boton_scroll.js";
import countdown from "./dom/cuenta_regresiva.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import{alarm, digitalClock} from "./dom/reloj.js";
import {moveBall,shorcut} from "./dom/teclado.js"
import darkTheme from "./dom/tema_oscuro.js";
const d=document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel","menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma_2.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown",
    "March 14, 2021 00:00:00",
    "Feliz Cumpleaños Yhomira");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube",
        "(min-width:1024px)",
        `<a href="https://www.youtube.com/watch?v=FhAQ_d-VHwA">Ver Video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/FhAQ_d-VHwA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

    responsiveMedia(
        "gmaps",
        "(min-width:1024px)",
        `<a href="https://g.page/Inkasworldperu?share">Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.3070190090425!2d-71.98096578616286!3d-13.51674069049987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd6739cd7f175%3A0x27c9a9082fc6343!2sCusco%2C%20Plaza%20de%20armas!5e0!3m2!1ses!2spe!4v1611954560236!5m2!1ses!2spe" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`)
    
    responsiveTester("responsive-tester")

    userDeviceInfo("user-device");
    webCam("webcam")
    
});

d.addEventListener("keydown",e=>{
    shorcut(e);
    moveBall(e,".ball",".stage")
})
/******/
darkTheme(".dark-theme-btn","dark-mode")

networkStatus();