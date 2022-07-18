
import {loadMain} from "../src/loadMain";
import {loadMenu} from "../src/loadMenu";


loadMain();
addMenuButtonLink();


const menuLink = document.querySelector(".menu");
menuLink.addEventListener('click', () => {
    deleteBelowHeader();
    loadMenu();
});

const logoLink = document.querySelector(".mcLogo");
logoLink.addEventListener('click', () => {
    deleteBelowHeader();
    loadMain();
    addMenuButtonLink();
});

function deleteBelowHeader(){
    const contentContainer = document.getElementById("content");
    let child = contentContainer.lastElementChild;
    while(child != document.querySelector(".header")){
        contentContainer.removeChild(child);
        child = contentContainer.lastElementChild;
    }
}

function addMenuButtonLink(){
    const menuButton = document.querySelector(".menuButton");
    menuButton.addEventListener('click', () => {
        deleteBelowHeader();
        loadMenu();
    });
}





