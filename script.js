/***************************************************/
/****************** Toggle menu ********************/
/***************************************************/

const menuList = document.querySelector(".smartphone")
const buttonMenu = document.querySelector(".bar-box")

buttonMenu.addEventListener("click", function () {
    menuList.classList.toggle("visible")

})

/***************************************************/
/***************** toggle connexion ****************/
/***************************************************/

const connexion = document.querySelector('.conect-title')
const formDisplay = document.querySelector('.form-connexion')

connexion.addEventListener("click", function () {
    formDisplay.classList.toggle("visible")
})


/***************************************************/
/****************** Switch notion ******************/
/***************************************************/
const htmlButton = document.querySelector(".HTML-button");
const cssButton = document.querySelector(".CSS-button");
const jsButton = document.querySelector(".JS-button");
const openHtml = document.querySelector("#open-html");
const openCss = document.querySelector("#open-css");
const openJs = document.querySelector("#open-js");
// const openTheme = {
//     openHtml : 'document.querySelector("#open-html")',
//     openCss :'document.querySelector("#open-css")',
//     openJs : 'document.querySelector("#open-js")'
// };


if (outerWidth < 769) {

    htmlButton.addEventListener("click", function () {
        if (!openHtml.classList.contains("visible")) {
            openHtml.classList.add("visible")
            if (openCss.classList.contains("visible")) {
                openCss.classList.remove("visible")
            } if (openJs.classList.contains("visible")) {
                openJs.classList.remove("visible")
            }
        } else {
            openHtml.classList.remove("visible")
        }
    })

    cssButton.addEventListener("click", function () {
        if (!openCss.classList.contains("visible")) {
            openCss.classList.add("visible")
            if (openHtml.classList.contains("visible")) {
                openHtml.classList.remove("visible")
            } if (openJs.classList.contains("visible")) {
                openJs.classList.remove("visible")
            }
        } else {
            openCss.classList.remove("visible")
        }
    })

    jsButton.addEventListener("click", function () {
        if (!openJs.classList.contains("visible")) {
            openJs.classList.add("visible")
            if (openHtml.classList.contains("visible")) {
                openHtml.classList.remove("visible")
            } if (openCss.classList.contains("visible")) {
                openCss.classList.remove("visible")
            }
        } else {
            openJs.classList.remove("visible")
        }
    })
}


