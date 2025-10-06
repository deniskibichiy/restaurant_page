import "./styles.css"
import { createHome } from "./home";
import { createAbout } from "./about";
import { createMenu } from "./Menu";
createHome();
const container = document.querySelector("#content")
const nav = document.querySelector("nav");
nav.addEventListener("click", (e)=> {
    if(e.target.id === "home") {
        container.textContent = "";
        createHome()
    }
    else if(e.target.id === "menu") {
        container.textContent = "";
        createMenu()
    }
    else if(e.target.id === "about") {
        container.textContent = "";
        createAbout()
    }
})
//createAbout();
//createHome();
console.log("Set up initial done!")