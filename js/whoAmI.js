function tryy(){
   

var Current =document.getElementById('currentUser').value
localStorage.setItem('currentUser', Current);
console.log(Current)


localStorage.setItem('carts','{"admin":[1,4],"shimaa":[]}')
localStorage.setItem('items',
	`[
		{"name":"Thermo Ball Etip Gloves", "price":" 45,743", "imgSrc":"img/xpopular1.png"},
		{"name":"Thermo Ball Etip Gloves", "price":" 45,743", "imgSrc":"img/xpopular2.png"},
		{"name":"Thermo Ball Etip Gloves", "price":" 45,743", "imgSrc":"img/xpopular3.png"},
		{"name":"Thermo Ball Etip Gloves", "price":" 45,743", "imgSrc":"img/xpopular5.png"},
		{"name":"Thermo Ball Etip Gloves", "price":" 45,743", "imgSrc":"img/xpopular6.png"}]`
)
}