function createAbout () {
    const container = document.querySelector("#content");
    const div = document.createElement("div");
    const heading = document.createElement("h1");
    const supportHeading = document.createElement("h2");
    const para = document.createElement("p");
    const cta_btn = document.createElement("button");
    heading.textContent = "ABOUT OUR SHOP";
    supportHeading.textContent = "Coffee luxury your girlfriend will love!";
    para.textContent = "has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editorhas a more-or-less normal distribution of letters, as oppos";
    cta_btn.textContent = "READ MORE";
    div.appendChild(heading);
    div.appendChild(supportHeading);
    div.appendChild(para);
    div.appendChild(cta_btn);
    container.appendChild(div);
}
export {createAbout}