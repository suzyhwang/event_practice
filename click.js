let h1 = document.querySelector("div.clicker:first-child h1")


function handleH1Click(){
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleH1Click);
