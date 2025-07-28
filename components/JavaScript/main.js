import {setupMenu} from  "./menu.js";
import {Carrusel} from  "./carusel.js";
import { music_Player } from "./music.js";
import {cinta} from "./cinta.js";

//configuracion de menu cuando el DOM este listo

document.addEventListener('DOMContentLoaded', () => {
    setupMenu();
    Carrusel();
    music_Player();
    cinta();
})
