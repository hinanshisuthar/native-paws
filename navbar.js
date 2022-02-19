const openAccount = document.querySelector(".dropbtn");

openAccount.addEventListener("click", openMenu);

function openMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

const openHam = document.querySelector(".menu")
const hamIcon = document.querySelector(".bars-con")

hamIcon.addEventListener("click", menu);

    function menu() {
        console.log("here");
        if(openHam.style.display === "block") {
            openHam.style.display = "none";
        } else {
        openHam.style.display = "block";
        }
    }