var storageProducts = [
  
];
if(!JSON.parse( localStorage.getItem( 'items' ) )){
 localStorage.setItem('items', JSON.stringify(storageProducts));
}


function addo(){
  document.getElementById('allItems').style.visibility='hidden'
  if(JSON.parse( localStorage.getItem( 'items' ) )){
      var storageProducts=JSON.parse( localStorage.getItem( 'items' ) )
  }
  console.log('butt')
  var name =document.getElementById('name')
  var price =document.getElementById('price')
  var image =document.getElementById('img')
    var newProduct = {
  name: name.value,
  price: price.value,
  imgSrc: 'img/'+image.files[0].name,
}
// console.log(storageProducts)
storageProducts.push(newProduct)
localStorage.setItem('items', JSON.stringify(storageProducts));
}


function listAll(){
  const items = document.querySelectorAll('.not');

  items.forEach(not => {
    not.remove();
  });
  const parent = document.getElementById('allItems');
  parent.style.visibility='visible'
  storageProducts=JSON.parse( localStorage.getItem( 'items' ))
//   console.log(parent);
//   console.log(storageProducts);   
  for (let i = 0; i < storageProducts.length; i++) {
    
    const element = `
    <tr id='${i+1}' class='not'>
    <td >${i+1}</td>
    <td ><img id="smallIM" src="${storageProducts[i].imgSrc}" ></td>
    <td >${storageProducts[i].name}</td>
    <td >${storageProducts[i].price}</td>
    <td > <input type="button" value ='remove' class="${i+1}" onclick="myfunction(event)"></td>
  </tr>
    `;
    
    // console.log(products);

    parent.innerHTML += element;
  }

}
// delete item
function myfunction(e){
 var checkdel= e.target.className
 var deleteOne = document.getElementById(checkdel)
 var  itemToRemove = +deleteOne.id-1
 const carts = JSON.parse(localStorage.getItem('carts'))
 console.log(carts)
 for( let [index,cart] of Object.entries(carts)){
	 carts[index].splice(itemToRemove,1)
	 console.log(itemToRemove)
 }
 localStorage.setItem('carts', JSON.stringify(carts));
 deleteOne.remove()
 storageProducts=JSON.parse( localStorage.getItem( 'items' ))
 storageProducts.splice((checkdel-1),1)
 localStorage.setItem('items', JSON.stringify(storageProducts));
 listAll()
}
