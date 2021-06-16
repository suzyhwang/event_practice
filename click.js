let h1 = document.querySelector("div.clicker:first-child h1")


function handleH1Click(){
  const currentColor = h1.style.color;
  let newColor;
  if(currentColor === 'red'){
    newColor = 'blue'
  }else {
    newColor = "red";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleH1Click);
