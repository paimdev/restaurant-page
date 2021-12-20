import Banner from "./banner.jpg";

const home = () => {
  const homeContainer = document.createElement("div");

  const imageHeader = document.createElement("img");
  const header = document.createElement("h1");
  const copyParagraph = document.createElement("p");

  imageHeader.src = Banner;

  header.innerHTML = "The Odin Restaurant";
  copyParagraph.innerHTML =
    "You will find the best food in asgard here! Don't waste time and make your reservations RIGHT NOW!";
  
  homeContainer.append(imageHeader, header, copyParagraph);

  return homeContainer;
  };

export default home;