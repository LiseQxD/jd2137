(() => {
	let id = document.getElementById("open-popup");
	let popupWindow = null;
	let windowSize = 'width=1000,height=600,left=220,top=150';

	id.addEventListener("click", function(event){
		let url = this.href;
		if (popupWindow === null || popupWindow.closed) {
			popupWindow = window.open(url, 'Adblock', windowSize);
		} else {
			popupWindow.focus();
		}
		event.preventDefault();
	});
})();
