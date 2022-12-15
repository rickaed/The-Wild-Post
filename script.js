// window.location.reload





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
/***************************************************/
/****************** card desktop *******************/
/***************************************************/
if (outerWidth > 768) {

    const parent = document.querySelector(".grid-left");

    // premiere card


    const cardHTML = document.createElement("div");
    cardHTML.classList.add("HTML");
    parent.appendChild(cardHTML);



    const frontHTML = document.createElement("div");
    frontHTML.classList.add("front", "faces");
    cardHTML.appendChild(frontHTML);

    //placement de l'element dans la div front
    const btnHTML = document.querySelector(".HTML-button");
    frontHTML.appendChild(btnHTML);

    const backHTML = document.createElement("div");
    backHTML.classList.add("back", "faces");
    cardHTML.appendChild(backHTML);

    //placement de l'element dans la div back
    const openHTML = document.querySelector(".open-html");
    backHTML.appendChild(openHTML);



    let heightHTML = openHTML.scrollHeight;
    cardHTML.style.height = [heightHTML] + "px";
    // console.log(cardHTML.style.height);

    // // myText.classList.item('boldText')
    // console.log(cardHTML.classList);

    //seconde card

    const cardCSS = document.createElement("div");
    cardCSS.classList.add("CSS");
    parent.appendChild(cardCSS);

    const frontCSS = document.createElement("div");
    frontCSS.classList.add("front", "faces");
    cardCSS.appendChild(frontCSS);

    //placement de l'element dans la div front
    const btnCSS = document.querySelector(".CSS-button");
    frontCSS.appendChild(btnCSS);

    const backCSS = document.createElement("div");
    backCSS.classList.add("back", "faces");
    cardCSS.appendChild(backCSS);

    //placement de l'element dans la div back
    const openCSS = document.querySelector(".open-css");
    backCSS.appendChild(openCSS);

    let heightCSS = openCSS.scrollHeight;
    cardCSS.style.height = [heightCSS] + "px";

    // troisieme carte

    const cardJS = document.createElement("div");
    cardJS.classList.add("JS");
    parent.appendChild(cardJS);

    const frontJS = document.createElement("div");
    frontJS.classList.add("front", "faces");
    cardJS.appendChild(frontJS);

    //placement de l'element dans la div front
    const btnJS = document.querySelector(".JS-button");
    frontJS.appendChild(btnJS);

    const backJS = document.createElement("div");
    backJS.classList.add("back", "faces");
    cardJS.appendChild(backJS);

    //placement de l'element dans la div back
    const openJS = document.querySelector(".open-js");
    backJS.appendChild(openJS);

    let heightJS = openJS.scrollHeight;
    cardJS.style.height = [heightJS] + "px";
}

/***************************************************/
/**************** insertion article ****************/
/***************************************************/

// function constrArticle() {


// }

const form = document.querySelector(".ads-form")
form.onsubmit = function (event) {
    event.preventDefault();
    // constrArticle()

    const articles = document.querySelector(".articles");
    // recuperation des information
    const addTitle = document.getElementById("ads-title");
    const addImg = document.getElementById("ads-photo");
    const addTxt = document.querySelector(".txt-area");



    //trame article
    /* <div class="article"> */
    const newArticle = document.createElement("div");
    newArticle.classList.add("article");

    //     <h2>TITRE 2</h2>
    const title = document.createElement("h2");
    newArticle.appendChild(title);
    title.textContent = addTitle.value
    
    //     <span class="box-article">
    const boxArticle = document.createElement("div");
    boxArticle.classList.add("box-article");
    newArticle.appendChild(boxArticle);
    //         <div class="box-img">
    const boxImg = document.createElement("div");
    boxImg.classList.add("box-img");
    boxArticle.appendChild(boxImg);
    //             <img class="img-art"
    const img = document.createElement("img")
    img.classList.add("img-art");
    boxImg.appendChild(img);
    
      
        if (addImg.value == "") {
            img.src= `https://cdn.pixabay.com/photo/2018/03/23/22/11/knowledge-3255140_1280.jpg`
        } else {
             img.src = addImg.value
        }
    
   
    // img.src = selectImg;
    //         <p class="txt-art">
    const paragraphe = document.createElement("p");
    paragraphe.classList.add("txt-art");
    boxArticle.appendChild(paragraphe);
    paragraphe.textContent = addTxt.value;

    // placement de l'article
    articles.prepend(newArticle);
    //reset input
    const idUser = document.getElementById("user");
    idUser.value = "";
    addTitle.value = "";
    addTxt.value = "";
    addImg.value = "";

}
console.log(`Premier exam\nNos Wilders vont passer leurs premières armes lors de la presentation de leur Projet P1\nhttps://cdn.pixabay.com/photo/2018/05/23/21/26/entrepreneur-3425200__480.jpg`);



