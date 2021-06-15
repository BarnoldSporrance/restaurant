const contact = () => {

    if (document.getElementById('mainH') !==null) {
    
        mainH.remove();
 }
 
 if (document.getElementById('mainM') !==null) {
       
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


const youTubeLink = document.createElement("a");
youTubeLink.setAttribute('class', 'contactIcon');
youTubeLink.setAttribute('target', '_blank');
youTubeLink.setAttribute('href', 'https://www.youtube.com/c/CookdatFood1/featured');

const contactInsta = document.createElement("img");
contactInsta.setAttribute("class", "contactIcon");
contactInsta.setAttribute('id', 'instaID')
contactInsta.setAttribute("src", "../src/images/instagram.png");


const instaLink = document.createElement("a");
instaLink.setAttribute('class', 'contactIcon');
instaLink.setAttribute('href', 'https://instagram.com/cook_dat_food?utm_medium=copy_link');
instaLink.setAttribute('target', '_blank');

const contactBlurbHolder = document.createElement("div");
contactBlurbHolder.setAttribute('id', 'contactDetails');
contactBlurbHolder.setAttribute('class', 'contactIcon');



const blurbC = document.createElement('div');
blurbC.setAttribute('class', 'contactDetails');
blurbC.innerText = "Catch us on Instagram & YouTube. Come see what we've got cooking!";
contactBlurbHolder.appendChild(blurbC);

const email = document.createElement('div');
email.setAttribute('class', 'contactDetails');
email.innerText = "email: cookdatfood@gmail.com";
contactBlurbHolder.appendChild(email);

const telephone = document.createElement('div');
telephone.setAttribute('class', 'contactDetails');
telephone.innerText = "tel: 0800 YUM YUM";
contactBlurbHolder.appendChild(telephone);


youTubeLink.appendChild(contactYoutube);
contactHolder.appendChild(youTubeLink);

instaLink.appendChild(contactInsta);
contactHolder.appendChild(instaLink);

contactHolder.appendChild(contactBlurbHolder);

mainC.appendChild(contactHolder);

content.appendChild(mainC);
}


export {contact}