const contact = () => {

    if (document.getElementById('mainH') !==null) {
        alert('MainH is here and should be deleted');
        mainH.remove();
 }
 
 
 
 if (document.getElementById('mainM') !==null) {
        alert('MainM is here and should be deleted to avoid repeat');
        mainM.remove();
 }

//1. create main container
const mainC = document.createElement('div');
mainC.setAttribute('id', 'mainC');

navBar.setAttribute('class', 'blackFont');
navBar.classList.remove('whiteFont');

//2. create header
const header = document.createElement('div');
 const headerText = document.createTextNode("Cook dat Food");
 header.setAttribute('id', 'headerIDC');

 header.setAttribute('class', 'blackFont');
 header.classList.remove('whiteFont');


 header.appendChild(headerText);
 mainC.appendChild(header);

//3. create background
const backGroundImage = document.createElement("img");
backGroundImage.setAttribute("src", "../src/images/bulgar.jpg");
backGroundImage.setAttribute("id", "backGroundImageC");
mainC.appendChild(backGroundImage);



//4. append blurb
const contactHolder = document.createElement('div');
contactHolder.setAttribute('id', 'contactHolder');
contactHolder.setAttribute('class', 'whiteFont');

const contactYoutube = document.createElement("img");
contactYoutube.setAttribute("class", "contactIcon");
contactYoutube.setAttribute("src", "../src/images/youtube.png");

const contactInsta = document.createElement("img");
contactInsta.setAttribute("class", "contactIcon");
contactInsta.setAttribute("src", "../src/images/instagram.png");


contactHolder.appendChild(contactYoutube);
contactHolder.appendChild(contactInsta);



mainC.appendChild(contactHolder);

content.appendChild(mainC);
}


export {contact}