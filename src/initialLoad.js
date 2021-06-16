const initialLoad = () =>{
    
let content = document.getElementById('content');

//0. Create navBar
const navBar = document.createElement('div');
navBar.setAttribute('id', 'navBar');

//try to create a class to toggle
navBar.setAttribute('class', 'whiteFont');
navBar.classList.remove('blackFont');
//navBar.classList.toggle('blackFont');


content.appendChild(navBar);

//0.1 create homeTab
const homeTab = document.createElement('div');
homeTab.setAttribute('id', 'homeTab');
homeTab.setAttribute('class', 'navTab');
homeTab.innerText = "HOME";
navBar.appendChild(homeTab);

//0.2. create contact tab
const contactTab = document.createElement('div');
contactTab.setAttribute('id', 'contactTab');
contactTab.setAttribute('class', 'navTab');
contactTab.innerText = "CONTACT";
navBar.appendChild(contactTab);

//0.3 create menu tab
const menuTab = document.createElement('div');
menuTab.setAttribute('id', 'menuTab');
menuTab.setAttribute('class', 'navTab');
menuTab.innerText = "MENU";
navBar.appendChild(menuTab);
 
}



export { initialLoad }