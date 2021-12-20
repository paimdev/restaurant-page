const menu = () => {
  const menuContainer = document.createElement("div");

  const header = document.createElement("h1");
  const menuParagraph = document.createElement("p");

  header.innerHTML = "Menu";
  menuParagraph.innerHTML = "This is a test for the menu paragraph!";
  
  menuContainer.append(header, menuParagraph);

  return menuContainer;
};

export default menu;