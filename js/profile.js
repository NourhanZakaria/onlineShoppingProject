function createProductNode(name, price, imgSrc, id) {
	const tds=Array(5)
	tds[0]=document.createElement('td');
	tds[0].classList.add('order','_small');

	tds[1]=document.createElement('td');
	tds[1].classList.add('_small');
	tds[1].appendChild(document.createElement('img'));
	tds[1].firstChild.src=imgSrc;


	tds[2]=document.createElement('td');
	tds[2].innerText=name

	tds[3]=document.createElement('td');
	tds[3].innerText=price

	tds[4]=document.createElement('td');
	tds[4].classList.add('_small');
	tds[4].appendChild(document.createElement('button'));
	tds[4].firstChild.appendChild(document.createElement('img'));
	tds[4].firstChild.firstChild.src='img/icons8-trash-48.png'


	const btn = tds[4].firstChild;
	const tr =document.createElement('tr')
	btn.addEventListener("click", () => {
		toggleProductInCart(id);
		tr.remove()
		orderCartList()
	});
	for(let td of tds){
		tr.appendChild(td)
	}
	return tr;
}
function orderCartList(){
	Array.from(document.querySelectorAll('.profile__cart .order')).map((x,index)=>x.innerText=index+1)
}
function listCart() {
	let cart = document.getElementById('cart')
	products = JSON.parse(localStorage.getItem("items"));
	while(cart.firstChild){
		cart.removeChild(cart.firstChild)
	}
	for (let [index, product] of products.entries()) {
		if(isInCart(index))
			cart.appendChild(
				createProductNode(product.name, product.price, product.imgSrc, index)
			);
	}
	orderCartList()
}

//code
document.getElementById('catName').textContent=localStorage.getItem( 'currentUser' )

listCart()
