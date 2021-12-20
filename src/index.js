import home from "./home-component";
import menu from "./menu-component";
import contact from "./contact-component";

const contentContainer = document.getElementById("content");
const tabList = document.createElement("ul");
const tabContent = document.createElement("div");

const homeTab = document.createElement("li");
homeTab.innerHTML = "Home";
const menuTab = document.createElement("li");
menuTab.innerHTML = "Menu";
const contactTab = document.createElement("li");
contactTab.innerHTML = "Contact";

homeTab.addEventListener("click", () => {
  tabContent.innerHTML = "";
  tabContent.appendChild(home());
});

menuTab.addEventListener("click", () => {
  tabContent.innerHTML = "";
  tabContent.appendChild(menu());
});

contactTab.addEventListener("click", () => {
  tabContent.innerHTML = "";
  tabContent.appendChild(contact());
});

tabList.append(homeTab, menuTab, contactTab);

contentContainer.appendChild(tabList);
contentContainer.appendChild(tabContent);
tabContent.appendChild(home());