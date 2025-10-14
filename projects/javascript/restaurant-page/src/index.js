import "./styles.css";
import Home from "./home.js";
import Menu from "./menu.js";

const content = document.getElementById("content");

content.innerHTML = "";
Home();

document.getElementById("home").addEventListener("click", () => {
  content.innerHTML = "";
  Home();
});
document.getElementById("menu").addEventListener("click", () => {
  content.innerHTML = "";
  Menu();
});
