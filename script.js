window.onload = () => {

  document.getElementById("nav-close").onclick = () => {
    console.log("CLOSE")
    document.getElementById("nav-bar").style.height = "0vh";
  }

  document.getElementById("nav-open").onclick= () => {
    console.log("OPEN")
    document.getElementById("nav-bar").style.height = "100vh";
  }

  const page_titles = document.getElementsByClassName("page-title");

for (const element of page_titles) {
  element.nextElementSibling.style.width = element.offsetWidth*0.85 +"px";
  element.nextElementSibling.style.left = element.offsetWidth*0.15 +"px";
}

};


