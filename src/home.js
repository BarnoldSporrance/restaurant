const home = () =>{



//1. create main container
 const mainH = document.createElement('div');
 mainH.setAttribute('id', 'mainH');

 //2. create header
 const header = document.createElement('div');
  const headerText = document.createTextNode("Cook dat Food");
  header.setAttribute('id', 'headerID');
  header.appendChild(headerText);
  mainH.appendChild(header);

//3. create background
 const backGroundImage = document.createElement("img");
 backGroundImage.setAttribute("src", "../src/images/salad.jpg");
 backGroundImage.setAttribute("id", "backGroundImage");
 mainH.appendChild(backGroundImage);

//4. append blurb
const blurbHolder = document.createElement('div');
blurbHolder.setAttribute('id', 'blurbHolder');
blurbHolder.innerText = "Welcome to Yanni's amazing food wonderland. Where dreams become reality. The pinnacle of yum. And lots of other, nice, friendly, pleasant compliments about the food. My word, it's rather good, eh!?";
mainH.appendChild(blurbHolder);

content.appendChild(mainH);

}

export { home }