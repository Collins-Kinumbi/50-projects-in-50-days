var search = document.querySelector(".search");
var input = document.querySelector(".input");
var btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    search.classList.toggle("active");
    //search.classList.toggle("active"); toggle basically does the same thing as add but if pressed again it removes the add and becomes removed//
    input.focus()
})
