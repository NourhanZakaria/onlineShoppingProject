
// Show Details of product

  
  var firstProduct=['img/xchoce_watch1.webp','Thermo Ball Etip Gloves',
   '20%','$23,82'];
   var secondProduct=['img/xpopular4.png','Thermo Ball',
   '25%','$33,52'];
   var win;
  
  
   function ViewDetails(){
     
      win=window.open("details.html",'',"width=650,height=800,top=0,left=0")
      win.onload = function() {
        setTimeout(function(){

          var productDiv=win.document.getElementById('product')
          console.log(productDiv)
          var productDetails=`
          <div class="container">
          <div class="row">
              <div class="col-lg-6 col-md-6">
                  <div class="card">
                      <img src="${firstProduct[0]}">
                  </div>
              </div>
             <div class="col-lg-6 show col-md-6">
               <div class="card">
                  <h1>${firstProduct[1]}</h1>
                  <p>The discount : ${firstProduct[2]}</p>
                  <p>The price after discount : ${firstProduct[3]}</p>
              </div>
             </div>
            </div>
          </div>
        `;     
  
         productDiv.innerHTML=productDetails;
        //productDiv.appendChild(productDetails);

         }, 500)};
 
}


function ViewDetailsP2(){
  win=window.open("details.html",'',"width=650,height=800,top=0,left=0")
  win.onload = function() {
    setTimeout(function(){

      var productDiv=win.document.getElementById('product')
      console.log(productDiv)
      var productDetails=`
      <div class="container">
      <div class="row">
          <div class="col-lg-6 col-md-6">
              <div class="card">
                  <img src="${secondProduct[0]}">
              </div>
          </div>
         <div class="col-lg-6 show col-md-6">
           <div class="card">
              <h1>${secondProduct[1]}</h1>
              <p>The discount : ${secondProduct[2]}</p>
              <p>The price after discount : ${secondProduct[3]}</p>
              
          </div>
         </div>
        </div>
      </div>
    `;     

     productDiv.innerHTML=productDetails;
    //productDiv.appendChild(productDetails);


     }, 500)};
}



