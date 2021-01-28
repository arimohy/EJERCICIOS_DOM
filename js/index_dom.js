import hamburgerMenu from "./dom/1_menu_hamburguesa.js";
import countdown from "./dom/cuenta_regresiva.js";
import{alarm, digitalClock} from "./dom/reloj.js";
import {moveBall,shorcut} from "./dom/teclado.js"
const d=document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel","menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma_2.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown",
    "March 14, 2021 00:00:00",
    "Feliz Cumpleaños Yhomira");
});

d.addEventListener("keydown",e=>{
    shorcut(e);
    moveBall(e,".ball",".stage")
})
