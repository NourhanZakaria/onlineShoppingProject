var checkUser=  localStorage.getItem( 'currentUser' )
console.log(checkUser)
if(checkUser=='admin'){
  document.getElementById('adminContainer').style.display='block'
}

var storageProducts = [
  
];
if(!JSON.parse( localStorage.getItem( 'items' ) )){
 localStorage.setItem('items', JSON.stringify(storageProducts));
}


function addo(){
  if(document.getElementById('name').value&&document.getElementById('price').value&&document.getElementById('img').value){
   

  document.getElementById('allItems').style.visibility='hidden'
  if(JSON.parse( localStorage.getItem( 'items' ) )){
      var storageProducts=JSON.parse( localStorage.getItem( 'items' ) )
  }
  // console.log('butt')
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
 msgBox('item has been added')
}
else{
  msgBox('enter all data')
}
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
    <td  id="pad"> <input type="button" value ='remove' class="${i+1}" onclick="myfunction(event)"></td>
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
 deleteOne.remove()
 storageProducts=JSON.parse( localStorage.getItem( 'items' ))
 storageProducts.splice((checkdel-1),1)
 localStorage.setItem('items', JSON.stringify(storageProducts));
 listAll()
}
