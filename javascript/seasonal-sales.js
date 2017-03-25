var productsContainer = document.getElementById("productsContainer");
var departmentsContainer = document.getElementById("departmentsContainer");
var productArray = [];
var departmentArray = [];
var productsString = "";
///////////////////////////////////////////PRODUCTS

function dataHandler(){
	
	productArray.forEach(function(product){

		for (var i=0; i<departmentArray.length; i++) {
			if (product.category_id === departmentArray[i].id) {
				product["category_name"] = departmentArray[i].name;
				product["categorySeasonDiscount"] = departmentArray[i].season_discount;
				product["category_discount"] = departmentArray[i].discount;
				product["season_price"] = (product.price - (product.price * departmentArray[i].discount));
			}
		}
	})
	writeToDom("none");
};

function writeToDom(season){

	var productBuilder ="";
	for (var i = 0; i < productArray.length; i++) {
		productBuilder += `<div class="row">`
		productBuilder += `<div class="col-sm-9 col-md-6 name"><h3>${productArray[i].name}</h3>`
		if (season === productArray[i].categorySeasonDiscount) {
			productBuilder += `<div class="row price"> <div class="col-xs-8 col-sm-6"><h4>${productArray[i]["season_price"].toFixed(2)}</h4></div>`
		} else {
			productBuilder += `<div class="row price"> <div class="col-xs-8 col-sm-6"><h4>${productArray[i].price}</h4></div>`

		}
		productBuilder += `<div class="col-xs-4 col-sm-6 category_name"><h4>${productArray[i].category_name}</h4></div>`
		productBuilder += `</div></div></div>`
		productsContainer.innerHTML = productBuilder
	}
}

var dropDown = document.getElementById("chooseSeason");

dropDown.addEventListener("change", function(e){
    var seasonSelection = e.target.value;
    writeToDom(seasonSelection);
});


function executeParseProducts(){
	var data = JSON.parse(this.responseText).products;
	productArray = data;

	dataHandler();
}

function executeDepartmentsAfterFileIsLoaded(){
	var data = JSON.parse(this.responseText).categories;
	departmentArray = data;
}

function executeThisCodeAfterFileFails(){
	alert("Sale is Unavailable");
}


var myRequestDepartments = new XMLHttpRequest();
myRequestDepartments.addEventListener("load", executeDepartmentsAfterFileIsLoaded);
myRequestDepartments.addEventListener("error", executeThisCodeAfterFileFails);
myRequestDepartments.open("GET", "departments.json");
myRequestDepartments.send();

var myRequestProducts = new XMLHttpRequest();
myRequestProducts.addEventListener("load", executeParseProducts);
myRequestProducts.addEventListener("error", executeThisCodeAfterFileFails);
myRequestProducts.open("GET", "products.json");
myRequestProducts.send();







