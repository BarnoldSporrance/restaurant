const menu = () => {

    
if (document.getElementById('mainH') !==null) {
       alert('MainH is here');
       mainH.remove();
}

       let mainM = document.createElement('div');
       mainM.setAttribute('id', 'mainM');
       
       //2. create header
       const header = document.createElement('div');
       const headerText = document.createTextNode("Cook dat Food");
       header.setAttribute('id', 'headerID');
       header.appendChild(headerText);
       mainM.appendChild(header);
       
        //1. create background
        const backGroundImageM = document.createElement("img");
        backGroundImageM.setAttribute("src", "../src/images/table.jpg");
        backGroundImageM.setAttribute("id", "backGroundImageM");
        mainM.appendChild(backGroundImageM);
       
       const backgroundLayerM = document.createElement("div");
       backgroundLayerM.setAttribute('id', 'backgroundLayerM');

       const menuWrapper = document.createElement('div');
       menuWrapper.setAttribute('id', 'menuWrapper');
      // next add the menu div
      mainM.appendChild(menuWrapper);

       
       mainM.appendChild(backgroundLayerM);
       
       content.appendChild(mainM);  
}

export { menu }