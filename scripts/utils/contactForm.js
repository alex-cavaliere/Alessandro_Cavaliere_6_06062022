function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.setAttribute("aria-hidden", "false");
    modal.setAttribute("role", "dialog");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
}
const open = document.querySelector('.contact_button');
open.addEventListener('click', displayModal);

const close = document.querySelector(".close");
close.addEventListener('click', closeModal);


