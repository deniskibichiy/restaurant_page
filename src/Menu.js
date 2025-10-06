

import menuImage from "./img-1.png";

function createMenu() {
    const container = document.querySelector("#content");
    const div = document.createElement("div");
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
    div.appendChild(description);
    div.appendChild(coffee_cta);
    const item2 = div.cloneNode(true);
    const item3 = div.cloneNode(true);
    const item4 = div.cloneNode(true);
    container.appendChild(div);
    container.appendChild(item2);
    container.appendChild(item3);
    container.appendChild(item4);
}

export{createMenu}