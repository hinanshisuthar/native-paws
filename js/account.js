const profileBtn = document.querySelector("#profile-btn");
const ordersBtn = document.querySelector("#orders-btn");
const addressBtn = document.querySelector("#addresses-btn");
const profileSection = document.querySelector("#profile");
const ordersSection = document.querySelector("#orders");
const addressSection = document.querySelector("#address");

profileBtn.addEventListener("click", () => {
    profileSection.style.display = "block";
    ordersSection.style.display = "none";
    addressSection.style.display = "none";
})

ordersBtn.addEventListener("click", () => {
    ordersSection.style.display = "block";
    profileSection.style.display = "none";
    addressSection.style.display = "none";
})

addressBtn.addEventListener("click", () => {
    addressSection.style.display = "block";
    ordersSection.style.display = "none";
    profileSection.style.display = "none";
})