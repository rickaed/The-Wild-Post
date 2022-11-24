function altern_text(id) {
    let para = document.getElementById(id);
    if (para.style.display == "none") {
        document.getElementById("open-html").style.display = "none";
        document.getElementById("open-css").style.display = "none";
        document.getElementById("open-JS").style.display = "none";
        para.style.display = "inline";
    } else {
        para.style.display = "none";
    }
}
function inline(id) {
    const list = document.getElementById(id);
    if (list.style.display == "none") {
        list.style.display = "inline";
    } else {
        list.style.display = "none";
    }
}
    /*if  (id == none){
display none sur tout .
ouvrrir id
}else {
display none sur mon id
}


*/