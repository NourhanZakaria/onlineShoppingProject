// var products = [
//     ['mostafa','55','/wow.jpg'],
//     ['mostafa','55','/wow.jpg'],
//     ['mostafa','55','/wow.jpg'],
//     ['mostafa','55','/wow.jpg'],
// ]
// var newProduct =['mostafaa','556','/wow.jpg']
// function addProduct(product,element){
//     products.push(product);
//     setCookie('items',products,10-10-2023)
//     var parent=document.getElementById(element)
// for (let [index,product] of products.entries()){
//     let productHTML = `
//     <div class="col-lg-4 col-md-6">
//     <div class="card">
//         <div class="image">
//             <img src="${index[2]}">
//             <i class="fa-solid fa-heart"></i>
//             <button class="btn">Add To cart</button>
//         </div>
//         <h3>${index[0]}</h3>
//         <span>$ ${index[1]}</span>
//     </div>

//  </div>
//     `;
//     parent.innerHTML += element;
// }
// }
// console.log(getCookie('items'))
// addProduct(newProduct,'mast')
// console.log(getCookie('items'))

// const storageProducts = [
//      {
//             name: 'zeb',
//             price: 23000,
//             imgSrc: '../img/xgallery1.webp',
//     }
//   ];
  
// //   const newProduct = {
// //     name: 'zebyyyyyyyyyyyyy',
// //     price: 23000,
// //     imgSrc: '../img/xgallery1.webp',
// //   };
  
// //   const newProduct2 = {
// //     name: 'zebyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
// //     price: 23000,
// //     imgSrc: '../img/xgallery1.webp',
// //   };
// //   console.log(newProduct2)

  
//   function addProduct(product, element) {
//     // console.log(product);
  
//     storageProducts.push(product);
//     // setCookie('items',JSON.stringify(storageProducts),10-10-2023)
//     localStorage.setItem('items', JSON.stringify(storageProducts));
  
//     const parent = document.getElementById(element);
//     // console.log(parent);
   
//       // console.log(products[i]);
//       const elementt = `
//       <div class="col-lg-4 col-md-6">
//       <div class="card">
//           <div class="image">
//               <img src="${storageProducts[storageProducts.length-1].imgSrc}">
//               <i class="fa-solid fa-heart"></i>
//               <button class="btn">Add To cart</button>
//           </div>
//           <h3>${storageProducts[storageProducts.length-1].name}</h3>
//           <span>$ ${storageProducts[storageProducts.length-1].price}</span>
//       </div>
  
//    </div>
//       `;
//     //   console.log(storageProducts[i]);
//      console.log(product);
  
//       parent.innerHTML += elementt;
//       console.log(product);
    
//   }

//   addProduct(newProduct, 'mast');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
  console.log(storageProducts)
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
    console.log(parent);
    console.log(storageProducts);   
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
   deleteOne.remove()
   storageProducts=JSON.parse( localStorage.getItem( 'items' ))
   storageProducts.splice((checkdel-1),1)
   localStorage.setItem('items', JSON.stringify(storageProducts));
   listAll()
  }

 
  
 
