
import { initialLoad } from './initialLoad.js'
import { contact } from './contact.js'
import { menu } from './menu.js'
import { home } from './home.js'


initialLoad();
home(); 

document.getElementById('contactTab').addEventListener("click", contact);

document.getElementById('menuTab').addEventListener("click", menu);

document.getElementById('homeTab').addEventListener('click', initialLoad);














