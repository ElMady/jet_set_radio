import {setupMenu} from  "./menu.js";
import {Carrusel} from  "./carusel.js";

//configuracion de menu cuando el DOM este listo

document.addEventListener('DOMContentLoaded', () => {
    setupMenu();
    Carrusel();
})
