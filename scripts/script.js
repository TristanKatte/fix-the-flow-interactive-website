var button = documentquerySelector("button");
var element = documentquerySelector("div");

button.addEventListener("click", function() {
    element.classList.toggle("article-content-expanded");
   
})

