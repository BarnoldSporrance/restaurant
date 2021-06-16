const menu = () => {

    
if (document.getElementById('mainH') !==null) {
      
       mainH.remove();
}

if (document.getElementById('mainC') !==null) {
   
       mainC.remove();
}

       navBar.setAttribute('class', 'whiteFont');
       navBar.classList.remove('blackFont');

       let mainM = document.createElement('div');
       mainM.setAttribute('id', 'mainM');
       
       //2. create header
       const header = document.createElement('div');
       const headerText = document.createTextNode("COOK DAT FOOD");
       header.setAttribute('id', 'headerID');
       header.appendChild(headerText);

       header.setAttribute('class', 'whiteFont');
       header.classList.remove('blackFont');


       mainM.appendChild(header);
       
        //1. create background
        const backGroundImageM = document.createElement("img");
        backGroundImageM.setAttribute("src", "../src/images/table.jpg");
        backGroundImageM.setAttribute("id", "backGroundImageM");
        mainM.appendChild(backGroundImageM);
       
       const backgroundLayerM = document.createElement("div");
       backgroundLayerM.setAttribute('id', 'backgroundLayerM');


        // next add the menu div
       const menuWrapper = document.createElement('div');
       menuWrapper.setAttribute('id', 'menuWrapper');
       
       //fist dish
       const dish1 = document.createElement('div');
       dish1.setAttribute('class', 'dish');
       dish1.setAttribute('id', 'dish1');

       const dish1Title = document.createElement('p');
       dish1Title.setAttribute('class', 'dishTitle');
       dish1Title.setAttribute('id','dish1Title');
       dish1Title.innerText = "cock-a-leekie soup"

       const dish1Description = document.createElement('p');
       dish1Description.setAttribute('class', 'description');
       dish1Description.innerText = "Chicken, leak, pearl barley and prunes for flavour"

       dish1Title.appendChild(dish1Description);
       menuWrapper.appendChild(dish1Title);

       //2nd dish
       const dish2 = document.createElement('div');
       dish2.setAttribute('class', 'dish');
       dish2.setAttribute('id', 'dish2');

       const dish2Title = document.createElement('p');
       dish2Title.setAttribute('class', 'dishTitle');
       dish2Title.setAttribute('id','dish2Title');
       dish2Title.innerText = "stovies"

       const dish2Description = document.createElement('p');
       dish2Description.setAttribute('class', 'description');
       dish2Description.innerText = "potatoes sweated with slow-cooked lamb, root vegetbables and spices."

       dish2Title.appendChild(dish2Description);
       menuWrapper.appendChild(dish2Title);

       //3rd dish
       const dish3 = document.createElement('div');
       dish3.setAttribute('class', 'dish');
       dish3.setAttribute('id', 'dish3');

       const dish3Title = document.createElement('p');
       dish3Title.setAttribute('class', 'dishTitle');
       dish3Title.setAttribute('id','dish3Title');
       dish3Title.innerText = "lentil & ham hock soup "

       const dish3Description = document.createElement('p');
       dish3Description.setAttribute('class', 'description');
       dish3Description.innerText = "flavorful, hearty smoked ham laces this hearty red lentil & onion broth with real punch."

       dish3Title.appendChild(dish3Description);
       menuWrapper.appendChild(dish3Title);

       //4th dish
       const dish4 = document.createElement('div');
       dish4.setAttribute('class', 'dish');
       dish4.setAttribute('id', 'dish4');

       const dish4Title = document.createElement('p');
       dish4Title.setAttribute('class', 'dishTitle');
       dish4Title.setAttribute('id','dish4Title');
       dish4Title.innerText = "`full Scottish breakfast "

       const dish4Description = document.createElement('p');
       dish4Description.setAttribute('class', 'description');
       dish4Description.innerText = "the works: haggis slices, lorne sausage, beans, tattie scones, black pudding, dumpling, feid mushrooms & fried tomatos."

       dish4Title.appendChild(dish4Description);
       menuWrapper.appendChild(dish4Title);

       //5th dish
       const dish5 = document.createElement('div');
       dish5.setAttribute('class', 'dish');
       dish5.setAttribute('id', 'dish5');

       const dish5Title = document.createElement('p');
       dish5Title.setAttribute('class', 'dishTitle');
       dish5Title.setAttribute('id','dish5Title');
       dish5Title.innerText = "Crunachan";

       const dish5Description = document.createElement('p');
       dish5Description.setAttribute('class', 'description');
       dish5Description.innerText = "Strawberry, raspberrys and honey combined with yogurt and whiiped cream, topped with candied oats."

       dish5Title.appendChild(dish5Description);
       menuWrapper.appendChild(dish5Title);


       
       // construct the page
       mainM.appendChild(menuWrapper);
       
       mainM.appendChild(backgroundLayerM);
       
       content.appendChild(mainM);  
}

export { menu }