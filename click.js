let title = document.querySelector("div.clicker:first-child h1")

function handleH1Click(){
  title.style.color = "red";
}

function handleMouseEnter(){
 title.innerText = "Mouse is here!";
}

function handleMouseLeave(){
 title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleH1Click);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
