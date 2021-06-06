const initialLoad = () =>{
    
let content = document.getElementById('content');

//0. Create navBar
const navBar = document.createElement('div');
navBar.setAttribute('id', 'navBar');
content.appendChild(navBar);

//0.1 create homeTab
const homeTab = document.createElement('div');
homeTab.setAttribute('id', 'homeTab');
homeTab.setAttribute('class', 'navTab');
homeTab.innerText = "Home";
navBar.appendChild(homeTab);

//0.2. create contact tab
const contactTab = document.createElement('div');
contactTab.setAttribute('id', 'contactTab');
contactTab.setAttribute('class', 'navTab');
contactTab.innerText = "Contact";
navBar.appendChild(contactTab);

//0.3 create menu tab
const menuTab = document.createElement('div');
menuTab.setAttribute('id', 'menuTab');
menuTab.setAttribute('class', 'navTab');
menuTab.innerText = "Menu";
navBar.appendChild(menuTab);
 
}



export { initialLoad }