const menuList = document.querySelector(".smartphone")
const buttonMenu = document.querySelector(".bar-box")

/***************************************************/
/****************** Toggle menu ********************/
/***************************************************/

buttonMenu.addEventListener("click",function(){
    menuList.classList.toggle("visible")    
    
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

