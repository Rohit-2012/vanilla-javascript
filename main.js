const openBtn = document.getElementById("open-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-modal");

openBtn.addEventListener('click', openModal)

closeBtn.addEventListener('click', closeModal)

window.addEventListener('click', handleOutsideClick)
function openModal() {
    modal.style.display = "unset";
}

function closeModal() {
    modal.style.display = "none";
}

function handleOutsideClick(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}