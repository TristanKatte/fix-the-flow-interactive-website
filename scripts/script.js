const button = document.querySelector("button");
const element = document.querySelector("div.article-content");
const info = document.querySelector("div.info");

function showcontent(){
    info.classList.toggle("show");
}

button.addEventListener("click", showcontent );
button.addEventListener("click", function() {
    element.classList.toggle("article-content-expanded");
   
});
