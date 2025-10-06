 function createHome () {
    const container = document.querySelector("#content");
    const div = document.createElement("div");
    div.classList.add("home_div");
    const heading = document.createElement("h1");
    const para = document. createElement("p");
    const cta_btn = document.createElement("button");
    const about_btn = document.createElement("button");
    heading.textContent = "Samosa Shop";
    para.textContent = "More or less, you may want to deligh in our world-class samosa's.";
    cta_btn.textContent = "Call Now";
    about_btn.textContent = "About Us";
    div.appendChild(heading);
    div.appendChild(para);
    div.appendChild(cta_btn);
    div.appendChild(about_btn);
    container.appendChild(div);
 }

 export{createHome}