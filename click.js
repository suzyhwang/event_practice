let title = document.querySelector("div.clicker:first-child h1")

function handleH1Click(){
  title.style.color = "red"
}


title.addEventListener("click", handleH1Click)