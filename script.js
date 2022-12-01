/***************************************************/
/****************** Toggle menu ********************/
/***************************************************/

const menuList = document.querySelector(".smartphone")
const buttonMenu = document.querySelector(".bar-box")

buttonMenu.addEventListener("click",function(){
    menuList.classList.toggle("visible")    
    
})

/***************************************************/
/***************** toggle connexion ****************/
/***************************************************/

const connexion = document.querySelector('.conect-title')
const form= document.querySelector('.form-connexion')
 
connexion.addEventListener("click", function(){
    form.classList.toggle("visible")
})


/***************************************************/
/****************** Toggle notion ******************/
/***************************************************/
const htmlButton = document.querySelector(".HTML-button")
const cssButton = document.querySelector("CSS-button")
const jsButton = document.querySelector("JS-button")
const openTheme = [
   {theme : `document.querySelector("#open-html")`},
    {theme : `document.querySelector("#open-css")`},
    {theme : `document.querySelector("#openjs")`}
];
//          hide notions
htmlButton.addEventListener(clic,function(){
    for (let i = 0; i < openTheme.length; i++) {
        openTheme[i].theme.classList.toggle("none")
        

    }
})
//          affichage notion

