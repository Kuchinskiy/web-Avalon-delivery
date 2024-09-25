const refs = {
	openModalBtn: document.querySelector("[data-open-modal]"),
	closeModalBtn: document.querySelector("[data-close-modal]"),
	submitModalBtn: document.querySelector("[data-submit-modal]"),
	backdrop: document.querySelector("[data-backdrop]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);
refs.submitModalBtn.addEventListener("click", toggleModal);

refs.backdrop.addEventListener("click", logBackdropClick);

function toggleModal() {
	refs.backdrop.classList.toggle("is-hidden");
}

function logBackdropClick() {
	console.log("Это клик в бекдроп");
}