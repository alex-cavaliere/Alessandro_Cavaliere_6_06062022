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
