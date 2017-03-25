var productsContainer = document.getElementById("productsContainer");
var departmentsContainer = document.getElementById("departmentsContainer");
var productArray = [];
var departmentArray = [];


//////////////////////PRODUCTS

// function sendProductsToDom(xhrData){
// 	var productsString = "";
// 	for (var i=0; i<productArray.length; i++) {
// 		productArray += `<div class="row">`;
//   		productArray += `<div class="col-sm-6 col-md-4">`;
//     	productArray += `<div class="caption">`;
//         productArray += `<h3>Sale Item</h3>`;//name
//         productArray += `<p> ${productArray[i].price}</p>`;//price
//         productArray += `<p> ${productArray[i].catagories.name}</p>`;//department
//       	productArray += `</div></div></div>`;

// 	}

// }


function executeSalesAfterFileIsLoaded(){
	var data = JSON.parse(this.responseText);
	// sendProductsToDom(data);

	for(var i=0; i<data.products.length; i++){
	productArray.push(data.products[i])
};

dataHandler(data);
}

function dataHandler(productsxhr) {
	productArray.forEach(function(products){
		for (var i = 0; i<departmentArray.length; i++) {
			departmentArray[i]
			if (products)
		}
	})
}

function executeThisCodeAfterFileFails(){
	alert("Sale is Unavailable");
}






//////////////////////DEPARTMENTS

function sendDepartmentsToDom(xhrData){
	var categoriesString = "";
	for(var j = 0; j<categories.length; j++) {


	}
	// console.log("working");
}




// from inside the function that creates the department array, 
// call the request for the products JSON, and call a function to create the products array



function executeDepartmentsAfterFileIsLoaded(){
	var data = JSON.parse(this.responseText);
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










