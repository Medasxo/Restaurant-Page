import './styleMenu.css';
import McArabia from "./McArabia.png";
import McCrispy from "./McCrispy.png";
import HappyMeal from "./happyMeal.png";
import McMuffin from "./omeletteMcMuffin.png";
export function loadMenu() {
    const contentContainer = document.getElementById("content");


    //mainContent creation
    const mainContent = document.createElement("div");
    mainContent.className = "mainContent";

    const flexContainer = document.createElement('div');
    flexContainer.className = "flexContainer";


    const section1 = document.createElement('div');
    section1.className = "section";
    const food1 = document.createElement('div');
    food1.className = "food";
    const happyMeal = new Image();
    happyMeal.src = HappyMeal;
    const p1 = document.createElement('p');
    p1.innerText = "Happy Meal";
    food1.appendChild(happyMeal);
    food1.appendChild(p1);
    const food2 = document.createElement('div');
    food2.className = "food";
    const mcCrispy = new Image();
    mcCrispy.src = McCrispy;
    const p2 = document.createElement('p');
    p2.innerText = "McCrispy Meal";
    food2.appendChild(mcCrispy);
    food2.appendChild(p2);

    section1.appendChild(food1);
    section1.appendChild(food2);

    const section2 = document.createElement('div');
    section2.className = "section";
    const food3 = document.createElement('div');
    food3.className = "food";
    const mcMuffin = new Image();
    mcMuffin.src = McMuffin;
    const p3 = document.createElement('p');
    p3.innerText = "Omelette McMuffin Meal";
    food3.appendChild(mcMuffin);
    food3.appendChild(p3);
    const food4 = document.createElement('div');
    food4.className = "food";
    const mcArabia = new Image();
    mcArabia.src = McArabia;
    const p4 = document.createElement('p');
    p4.innerText = "McArabia Meal";
    food4.appendChild(mcArabia);
    food4.appendChild(p4);

    section2.appendChild(food3);
    section2.appendChild(food4);


    flexContainer.appendChild(section1);
    flexContainer.appendChild(section2);
    mainContent.appendChild(flexContainer);
    //Appending to content container(main)
    contentContainer.appendChild(mainContent);
}