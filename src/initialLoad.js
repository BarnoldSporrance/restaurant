const initialLoad = () =>
 console.log("This is inital load, imported to index.js, then bundled up and spat out via dist/main.js");

 const content = document.getElementById('content');

 const header = document.createElement('div');

 const headerText = document.createTextNode("Yanni's Pizzeria");
 
 header.setAttribute('id', 'header');

 header.appendChild(headerText);

 content.appendChild(header);










/*
<div id='header'>Yanni's Kitchen</div>
<image src="../src/images/pizzaBackground.jpeg"></image>
<p id ='para'> Welcome to Yanni's amazing pizza shop. Where dreams become reality. The pinnacle of pizza. The golden pizza-cea on the hoizon. Pizza diem. The alpha, and the omega of pizza. Enjoy pizza-actualization right here.</p>
*/

export { initialLoad }