const closeForm = document.querySelector(".close");
const openForm = document.querySelector('.contact_button');
const modal = document.querySelector("#contact_modal");
const main = document.querySelector("#main");

function displayModal() {
    modal.setAttribute("aria-hidden", "false");
    modal.setAttribute("role", "dialog");
	modal.style.display = "block";
}

function closeModal() {
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
}

openForm.addEventListener('click', displayModal);

closeForm.addEventListener('click', closeModal);

main.addEventListener('keydown', function(e){
    if (e.keyCode === 27){
        closeModal();
    }
})
modal.addEventListener('keydown', function(e){
    if (e.keyCode === 27){
        closeModal();
    }
})


