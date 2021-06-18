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
 const headerText = document.createTextNode("COOK DAT FOOD");
 header.setAttribute('id', 'headerIDC');

 header.setAttribute('class', 'blackFont');
 header.classList.remove('whiteFont');


 header.appendChild(headerText);
 mainC.appendChild(header);

//3. create background
const backGroundImage = document.createElement("img");
backGroundImage.setAttribute("src", "./images/bulgar.jpg");
backGroundImage.setAttribute("id", "backGroundImageC");
mainC.appendChild(backGroundImage);



//4. append blurb
const contactHolder = document.createElement('div');
contactHolder.setAttribute('id', 'contactHolder');
contactHolder.setAttribute('class', 'whiteFont');


const connect =document.createElement("div");
connect.setAttribute('id', 'connect');
connect.innerText = "CONNECT WITH US";
contactHolder.appendChild(connect);

const iconHolder = document.createElement('div');
iconHolder.setAttribute('id','iconHolder');
//iconHolder.setAttribute('class', 'contactDetails');
contactHolder.appendChild(iconHolder);


const contactYoutube = document.createElement("img");
contactYoutube.setAttribute("class", "contactIcon");
contactYoutube.setAttribute("src", "./images/youtube.png");


const youTubeLink = document.createElement("a");
youTubeLink.setAttribute('class', 'contactIcon');
youTubeLink.setAttribute('target', '_blank');
youTubeLink.setAttribute('href', 'https://www.youtube.com/c/CookdatFood1/featured');

const contactInsta = document.createElement("img");
contactInsta.setAttribute("class", "contactIcon");
contactInsta.setAttribute('id', 'instaID')
contactInsta.setAttribute("src", "./images/instagram.png");


const instaLink = document.createElement("a");
instaLink.setAttribute('class', 'contactIcon');
instaLink.setAttribute('href', 'https://instagram.com/cook_dat_food?utm_medium=copy_link');
instaLink.setAttribute('target', '_blank');

const contactBlurbHolder = document.createElement("div");
contactBlurbHolder.setAttribute('id', 'contactBlurbHolder');
contactBlurbHolder.setAttribute('class', 'contactIcon');



const blurbC = document.createElement('div');
blurbC.setAttribute('class', 'contactDetails');
blurbC.innerText = "I’m a foodie who attended culinary school in Italy to learn to cook properly rather than just cook well. I love food. I love thinking about it, reading about it, talking about it, cooking it, and most of all, eating it. I’m still hungry to learn, and will keep it going! Come see what we've got cooking!";
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
iconHolder.appendChild(youTubeLink);

instaLink.appendChild(contactInsta);
iconHolder.appendChild(instaLink);

contactHolder.appendChild(contactBlurbHolder);

mainC.appendChild(contactHolder);

content.appendChild(mainC);
}


export {contact}