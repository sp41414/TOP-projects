import "./styles.css";
import Home from "./home.js"

const content = document.getElementById("content");

Home();

document.getElementById("home").addEventListener("click", () => {
    content.innerHTML = "";
    Home();
})