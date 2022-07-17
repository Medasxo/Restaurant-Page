
import {loadMain} from "../src/loadMain";
import {loadMenu} from "../src/loadMenu";


loadMain();
const menuLink = document.querySelector(".menu");
menuLink.addEventListener('click', () => {
    const contentContainer = document.getElementById("content");
    let child = contentContainer.lastElementChild;
    while(child){
        contentContainer.removeChild(child);
        child = contentContainer.lastElementChild;
    }
    loadMenu();
});





