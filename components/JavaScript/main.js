import {setupMenu} from  "./menu.js";
import {Carrusel} from  "./carusel.js";
import { music_Player } from "./music.js";
import {cinta} from "./cinta.js";
import {store_car} from "./store_function.js";

//configuracion de menu cuando el DOM este listo

document.addEventListener('DOMContentLoaded', () => {
    setupMenu();
    cinta();
    if(document.querySelector('.store__Menu')) {store_car();}
    if(document.querySelector('.carrusel__inner')) {Carrusel();}
    if(document.querySelector('.musicplayer_3d')) {music_Player();}
})
