let h1 = document.querySelector("div.clicker:first-child h1")

function handleH1Click(){
  h1.style.color = "red";
}

function handleMouseEnter(){
 h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
 h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
  alert("copier!")
}

function handleWindowOffline(){
  alert("SOS no wifi!")
}

function handleWindowOnline(){
  alert("ALL GOOOD")
}

h1.addEventListener("click", handleH1Click);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);