import Logo from "./logo.png";
export function loadMain() {
    const contentContainer = document.getElementById("content");

    //Header creation
    const header = document.createElement("div");
    header.className = "header";

    const logoDiv = document.createElement("div");
    logoDiv.className="logo";
    const myLogo = new Image();
    myLogo.src = Logo;
    logoDiv.appendChild(myLogo);

    const title = document.createElement("p");
    title.className = "title";
    title.innerText = "McDonald's";

    const linkDiv = document.createElement("div");
    linkDiv.className = "links";
    const menuLink = document.createElement("a");
    menuLink.innerText = "Menu";
    menuLink.className = "menu";
    const contactsLink = document.createElement("a");
    contactsLink.innerText = "Contacts";
    contactsLink.className = "contacts";
    linkDiv.appendChild(menuLink);
    linkDiv.appendChild(contactsLink);

    header.appendChild(logoDiv);
    header.appendChild(title);
    header.appendChild(linkDiv);

    //mainContent creation
    const mainContent = document.createElement("div");
    mainContent.className = "mainContent";

    const phrase = document.createElement("div");
    phrase.className = "phrase";
    phrase.innerText = "I'm Lovin' It";

    const menuButton = document.createElement("button");
    menuButton.className = "menuButton";
    menuButton.innerText = "MENU";

    mainContent.appendChild(phrase);
    mainContent.appendChild(menuButton);

    //Header and mainContent appending to container
    contentContainer.appendChild(header);
    contentContainer.appendChild(mainContent);

}