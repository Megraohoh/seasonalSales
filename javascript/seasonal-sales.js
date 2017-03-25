var productsContainer = document.getElementById("productsContainer");
var departmentsContainer = document.getElementById("departmentsContainer");
var productArray = [];
var departmentArray = [];
var productsString = "";
///////////////////////////////////////////PRODUCTS

function dataHandler(data){
	
	products = data.products;
	productArray.forEach(function(products){
		for (var i=0; i<departmentArray.length; i++) {
			console.log(products.category_id);
			console.log(departmentArray[i].id);
			if (products.category_id === departmentArray[i].id) {
				products["category_name"] = departmentArray[i].name;
				products["categorySeasonDiscount"] = departmentArray[i].season_discount;
				products["category_discount"] = departmentArray[i].discount;
				products["season_price"] = (productArray.price * (1.00 - departmentArray[i].discount)).toFixed(2);
			}
		}
	})
	writeToDom();
};

function writeToDom(season){
	var productBuilder ="";
	for (var i = 0; i < productArray.length; i++) {
		productBuilder += `<div class="row">`
		productBuilder += `<div class="col-sm-9 col-md-6"><h3>${products[i].name}</h3>`
		if (season === productArray[i].categorySeasonDiscount) {
			productBuilder += `<div class="row"> <div class="col-xs-8 col-sm-6"><h4>${products[i]["season-price"]}</h4></div>`
		} else {
			productBuilder += `<div class="row"> <div class="col-xs-8 col-sm-6"><h4>${products[i].price}</h4></div>`

		}
		productBuilder += `<div class="col-xs-4 col-sm-6"><h4>${products[i].categorySeasonDiscount}</h4></div>`
		productBuilder += `</div></div></div>`
		productsContainer.innerHTML = productBuilder

}

var dropDown = document.getElementById("chooseSeason");

dropDown.addEventListener("change", function(e){
    var seasonSelection = e.target.value;
    writeToDom(seasonSelection);
});


function executeParseProducts(){
	var data = JSON.parse(this.responseText);

		for(var i=0; i<data.products.length; i++){
		productArray.push(data.products[i])
	}
	// console.log(productArray);
dataHandler(data);
}

function executeDepartmentsAfterFileIsLoaded(){
	var data = JSON.parse(this.responseText);
	// console.log(data);
	}
}

function executeThisCodeAfterFileFails(){
	alert("Sale is Unavailable");
}




var myRequestProducts = new XMLHttpRequest();
myRequestProducts.addEventListener("load", executeParseProducts);
myRequestProducts.addEventListener("error", executeThisCodeAfterFileFails);
myRequestProducts.open("GET", "products.json");
myRequestProducts.send();

var myRequestDepartments = new XMLHttpRequest();
myRequestDepartments.addEventListener("load", executeDepartmentsAfterFileIsLoaded);
myRequestDepartments.addEventListener("error", executeThisCodeAfterFileFails);
myRequestDepartments.open("GET", "departments.json");
myRequestDepartments.send();





