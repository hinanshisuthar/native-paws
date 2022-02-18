const openAccount = document.querySelector(".dropbtn");

openAccount.addEventListener("click", openMenu);

function openMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

