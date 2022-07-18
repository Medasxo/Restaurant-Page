import './styleContacts.css';
export function loadContacts(){
    const contentContainer = document.getElementById("content");


    //mainContent creation
    const mainContent = document.createElement("div");
    mainContent.className = "mainContent";
    const mapContainer = document.createElement("div");
    mapContainer.className = "mapContainer";
    const mapLabel = document.createElement("h1");
    mapLabel.className = "mapLabel";
    mapLabel.innerText = "Restaurant Location";
    mapLabel.insertAdjacentHTML('beforeend', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.244000970576!2d25.277077697610352!3d54.687733741481566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd941026501665%3A0x5ca5b368539cc244!2sMcDonald&#39;s!5e0!3m2!1slt!2slt!4v1658142507199!5m2!1slt!2slt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    mapContainer.appendChild(mapLabel);
    

    mainContent.appendChild(mapContainer);
    //Appending to content container(main)
    contentContainer.appendChild(mainContent);
}