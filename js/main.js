//global
window.onload=function(){
	allItemss()
	  var appear=document.getElementsByClassName("appear");
	  for(var i=0;i<3;i++){
		  appear[i].style.display="flex";
	  }
	 
  }
  function allItemss(){
	var storageitems =[]
	storageitems=JSON.parse( localStorage.getItem( 'items' ))
	console.log(storageitems)
	const parent = document.getElementById('popularProductsC');
	for (let i = 0; i < storageitems.length; i++) {
		// console.log(products[i]);
		const element = `
		<div class="col-lg-4 col-md-6">
		<div class="card appear">
		  <div class="image">
			<img src="${storageitems[i].imgSrc}" />
			<i class="fa-solid fa-heart"></i>
			<button class="btn">Add To cart</button>
		  </div>
		  <h3>${storageitems[i].name}</h3>
		  <span>$ ${storageitems[i].price}</span>
		</div>
	  </div>
		`;
	   
	
		// console.log(products);
	
		parent.innerHTML += element;
	  }
	}
  
  
  var show=document.getElementById("show");
  var currentItems=3;
  show.onclick = () =>{
   
	var products=[...document.querySelectorAll(".container .appear")]
	for(var i=currentItems;i<currentItems+3;i++){
	  try{
  
		//code that causes an error
		products[i].style.display="flex";
		}catch(e){
		
		}
		//continue from here
  
		
	}
	currentItems+=3;
	// console.log(products.length)
	// console.log(currentItems)
	 if(currentItems>=products.length){
  
	  show.style.display="none";
	 }
  }


function toggleProductInCart(id) {
	let carts = localStorage.getItem("carts");
	let currentUser = localStorage.getItem("currentUser");
	carts = JSON.parse(carts);
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