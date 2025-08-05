import {setupMenu} from  "./menu.js";
import {Carrusel} from  "./carusel.js";
import { music_Player } from "./music.js";
import {cinta} from "./cinta.js";
import {store_car} from "./store_function.js";

//configuracion de menu cuando el DOM este listo

document.addEventListener('DOMContentLoaded', () => {
    store_car();
    setupMenu();
    Carrusel();
    music_Player();
    cinta();
    
})
