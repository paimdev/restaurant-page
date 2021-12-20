const contact = () => {
  const contactContainer = document.createElement("div");

  const header = document.createElement("h1");
  const contactParagraph = document.createElement("p");

  header.innerHTML =  "Contact";
  contactParagraph.innerHTML = "This is a test for the contact paragraph!";
  
 contactContainer.append(header, contactParagraph);

  return contactContainer;
};

export default contact;