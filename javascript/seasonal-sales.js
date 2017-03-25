var productsContainer = document.getElementById("productsContainer");
var departmentsContainer = document.getElementById("departmentsContainer");
var productArray = [];
var departmentArray = [];

///////////////////////////////////////////PRODUCTS

function sendProductsToDom(xhrData){
	// var productsString = "";


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
	console.log(productArray);
};

function executeSalesAfterFileIsLoaded(){
	var data = JSON.parse(this.responseText);

		for(var i=0; i<data.products.length; i++){
		productArray.push(data.products[i])
	}
	console.log(productArray);
sendProductsToDom(data);
};



function executeThisCodeAfterFileFails(){
	alert("Sale is Unavailable");
}


/////////////////////////////////////////DEPARTMENTS

function executeDepartmentsAfterFileIsLoaded(){
	var data = JSON.parse(this.responseText);
	console.log(data);
	// sendDepartmentsToDom(data);

		for(var i=0; i<data.categories.length; i++){
		departmentArray.push(data.categories[i])
}

	var myRequestProducts = new XMLHttpRequest();
	myRequestProducts.addEventListener("load", executeSalesAfterFileIsLoaded);
	myRequestProducts.addEventListener("error", executeThisCodeAfterFileFails);
	myRequestProducts.open("GET", "products.json");
	myRequestProducts.send();


}

function executeThisCodeAfterFileFails(){
	alert("Departments are Unavailable");
}

var myRequestDepartments = new XMLHttpRequest();
myRequestDepartments.addEventListener("load", executeDepartmentsAfterFileIsLoaded);
myRequestDepartments.addEventListener("error", executeThisCodeAfterFileFails);
myRequestDepartments.open("GET", "departments.json");
myRequestDepartments.send();

