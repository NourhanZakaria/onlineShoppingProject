function toggleProductInCart(id) {
	let carts = localStorage.getItem("carts");
	carts = JSON.parse(carts);
	console.log('here')
	let currentUser = localStorage.getItem("currentUser");

	if (carts[currentUser].includes(id)) {
		carts[currentUser] = carts[currentUser].filter((x) => x !== id);
		msgBox(`product has been "removed" from your cart`);
	} else {
		carts[currentUser].push(id);
		msgBox(`product has been "added" to your cart`);
	}
	console.log(JSON.stringify(carts));
	localStorage.setItem("carts", JSON.stringify(carts));
}
function isInCart(id) {
	let carts = localStorage.getItem("carts");
	let currentUser = localStorage.getItem("currentUser");
	carts = JSON.parse(carts);
	if (carts[currentUser].includes(id)) {
		return true;
	}
	return false;
}

let hideMsgTimeout;//dont move this
function msgBox(msg) {
	clearTimeout(hideMsgTimeout);
	const msgDiv = document.getElementById("msgBox");
	setTimeout(() => msgDiv.classList.remove("msg-box_show"), 50);
	setTimeout(() => {
		msgDiv.innerText = msg;
		msgDiv.classList.add("msg-box_show");
		hideMsgTimeout = setTimeout(
			() => msgDiv.classList.remove("msg-box_show"),
			5000
		);
	}, 300);
}