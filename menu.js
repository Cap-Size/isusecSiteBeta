function openNav() {
    document.getElementById("mySidenav").classList.toggle("ghost"); 

    let menuButton = document.getElementById("menu-button");
    menuButton.innerHTML = menuButton.innerHTML == "☰" ? "×" : "☰";
}