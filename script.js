window.onload = () => {

  document.getElementById("nav-close").onclick = () => {
    console.log("CLOSE")
    document.getElementById("nav-bar").style.height = "0vh";
  }

  document.getElementById("nav-open").onclick= () => {
    console.log("OPEN")
    document.getElementById("nav-bar").style.height = "100vh";
  }

};
