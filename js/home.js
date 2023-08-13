//only this page
function setProductCardBtn(btn,id){
	if (isInCart(id)) {
		btn.innerText="Remove from cart";
	}else{
		btn.innerText="Add To cart";
		
	}
}
function createProductNode(name, price, imgSrc, id) {
	let producHTML = `
	<div class="col-lg-4 col-md-6">
		<div class="card">
			<div class="image">
				<img src="${imgSrc}" />
				<i class="fa-solid fa-heart"></i>
				<button class="btn">Add To cart</button>
			</div>
			<h3>${name}</h3>
			<span>${price}</span>
		</div>
	</div>`;
	let productNode = new DOMParser().parseFromString(producHTML, "text/html")
		.body.firstChild;
	const btn = productNode.getElementsByTagName("button")[0];
	setProductCardBtn(btn,id);
	btn.addEventListener("click", () => toggleProductInCart(id));
	btn.addEventListener("click", () => setProductCardBtn(btn,id));
	return productNode;
}
//code
const popularProductsC = document.getElementById("popularProductsC");
products = JSON.parse(localStorage.getItem("products"));

for (let [index, product] of products.entries()) {
	popularProductsC.appendChild(
		createProductNode(product.name, product.price, product.imgSrc, index)
	);
}