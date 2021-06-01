const initialLoad = () =>{
    const content = document.getElementById('content');
 // append header


 //create main container
 const main = document.createElement('div');
 main.setAttribute('id', 'main');

//1. create background
 const backGroundImage = document.createElement("img");
 backGroundImage.setAttribute("src", "../src/images/salad.jpg");
 backGroundImage.setAttribute("id", "backGroundImage");
 main.appendChild(backGroundImage);


 //2. create header
 const header = document.createElement('div');
  const headerText = document.createTextNode("Cook dat Food");
  header.setAttribute('id', 'headerID');
  header.appendChild(headerText);
  main.appendChild(header);

//3. Create navBar
const navBar = document.createElement('div');
navBar.setAttribute('id', 'navBar');
main.appendChild(navBar);

//4. create contact tab
const contactTab = document.createElement('div');
contactTab.setAttribute('id', 'contactTab');
contactTab.setAttribute('class', 'navTab');
contactTab.innerText = "Contact";
navBar.appendChild(contactTab);

//5. create menu tab
const menuTab = document.createElement('div');
menuTab.setAttribute('id', 'menuTab');
menuTab.setAttribute('class', 'navTab');
menuTab.innerText = "Menu";
navBar.appendChild(menuTab);


//4. append blurb
const blurbHolder = document.createElement('div');
blurbHolder.setAttribute('id', 'blurbHolder');
blurbHolder.innerText = "Welcome to Yanni's amazing food wonderland. Where dreams become reality. The pinnacle of yum. And lots of other, nice, friendly, pleasant compliments about the food. My word, it's rather good, eh!?";
main.appendChild(blurbHolder);

content.appendChild(main);
}



export { initialLoad }