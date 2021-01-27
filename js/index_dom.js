import hamburgerMenu from "./dom/1_menu_hamburguesa.js";
import{alarm, digitalClock} from "./dom/reloj.js";
import {shorcut} from "./dom/teclado.js"
const d=document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel","menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj")
    alarm("assets/alarma_2.mp3","#activar-alarma","#desactivar-alarma")
});

d.addEventListener("keydown",e=>{
    shorcut(e);
})
