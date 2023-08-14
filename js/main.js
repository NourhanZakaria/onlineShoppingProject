//global
// window.onload=function(){
// 	allItemss()
// 	  var appear=document.getElementsByClassName("appear");
// 	  for(var i=0;i<3;i++){
// 		  appear[i].style.display="flex";
// 	  }

//   }



var show = document.getElementById("show");
var lastItem = 0;
if ((parent = document.getElementById("popularProductsC"))) allItemss();
function setProductCardBtn(btn, id) {
	if (isInCart(id)) {
		btn.innerText = "Remove from cart";
	} else {
		btn.innerText = "Add To cart";
	}
}

function allItemss() {
	var storageitems = [];
	storageitems = JSON.parse(localStorage.getItem("items"));
	const parent = document.getElementById("popularProductsC");
	console.log(lastItem);
	if (!JSON.parse(localStorage.getItem("items")))
		document.getElementById("noItems").style.display = "block";
	for (let i = lastItem; i < lastItem + 3; i++) {
		if (typeof storageitems[i] === "undefined") {
			lastItem = i;
			show.remove();
			return;
		}
		const element = `
		<div class="col-lg-4 col-md-6">
		<div class="card appear">
		<div class="image">
		<img src="${storageitems[i].imgSrc}" />
		<i class="fa-solid fa-heart"></i>
		<button class="btn" id="toggleAdd-${i}">Add To cart</button>
		</div>
		<h3>${storageitems[i].name}</h3>
		<span>$ ${storageitems[i].price}</span>
		</div>
		</div>
		`;
		// parent.innerHTML += element;
		// let btn = document.getElementById(`toggleAdd-${i}`);
		// console.log(btn)
		// setProductCardBtn(btn, i);
		// btn.addEventListener("click", () => toggleProductInCart(i));
		// btn.addEventListener("click", () => setProductCardBtn(btn, i));
		let productNode = new DOMParser().parseFromString(element, "text/html").body
			.firstChild;
		const btn = productNode.getElementsByTagName("button")[0];
		setProductCardBtn(btn, i);
		btn.addEventListener("click", () => toggleProductInCart(i));
		btn.addEventListener("click", () => setProductCardBtn(btn, i));
		parent.appendChild(productNode);
	}
	lastItem += 3;
}

if (show)
	show.onclick = (e) => {
		allItemss();
	};
// var currentItems = 3;
// {
// 		var products = [...document.querySelectorAll(".container .appear")];
// 		for (var i = currentItems; i < currentItems + 3; i++) {
// 			try {
// 				//code that causes an error
// 				products[i].style.display = "flex";
// 			} catch (e) {}
// 			//continue from here
// 		}
// 		currentItems += 3;
// 		// console.log(products.length)
// 		// console.log(currentItems)
// 		if (currentItems >= products.length) {
// 			show.style.display = "none";
// 		}
// 	};
