import './styleMenu.css';
import Logo from "./logo.png";
export function loadMenu(){
    const contentContainer = document.getElementById("content");


    //mainContent creation
    const mainContent = document.createElement("div");
    mainContent.className = "mainContent";

    //Appending to content container(main)
    contentContainer.appendChild(mainContent);
}