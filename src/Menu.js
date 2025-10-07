

import menuImage from "./img-1.png";

function createMenu() {
    const container = document.querySelector("#content");
    const menu_container = document.createElement("div");
    menu_container.classList.add("menu-container")
    const div = document.createElement("div");
    div.classList.add("card");
    const coffeeType = document.createElement("h3");
    const description = document.createElement("p");
    const coffee_cta = document.createElement("button");
    coffeeType.textContent = "Coffee To Go";
    description.textContent = "The best coffee for coding";
    const image = document.createElement("img");
    image.src = menuImage;
    div.appendChild(image);
    coffee_cta.textContent = "Read More";
    div.appendChild(coffeeType);
    div.classList.add("items")
    div.appendChild(description);
    div.appendChild(coffee_cta);
    const item2 = div.cloneNode(true);
    const item3 = div.cloneNode(true);
    const item4 = div.cloneNode(true);
    menu_container.appendChild(div);
    menu_container.appendChild(item2);
    menu_container.appendChild(item3);
    menu_container.appendChild(item4);
    container.appendChild(menu_container)
}

export{createMenu}