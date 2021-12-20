import home from "./home-component";

const contentContainer = document.getElementById("content");
const tabContainer = document.createElement("div");
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
  tabContent.appendChild(home())
});

tabList.append(homeTab, menuTab, contactTab);

contentContainer.appendChild(tabList);
contentContainer.appendChild(tabContent);