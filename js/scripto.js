window.onload = function(){
allItemss()
}
function allItemss(){
var storageitems =[]
storageitems=JSON.parse( localStorage.getItem( 'items' ))
console.log(storageitems)
const parent = document.getElementById('mast');
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