var productsContainer = document.getElementById("productsContainer");
var departmentsContainer = document.getElementById("departmentsContainer");
var productArray = [];
var departmentArray = [];


//////////////////////PRODUCTS

function sendProductsToDom(xhrData){
	var productsString = "";
	for (var i=0; i<productArray.length; i++) {
		productArray += `<div class="row">`;
  		productArray += `<div class="col-sm-6 col-md-4">`;
    	productArray += `<div class="caption">`;
        productArray += `<h3>Sale Item</h3>`;//name
        productArray += `<p> ${productArray[i].price}</p>`;//price
        productArray += `<p> ${productArray[i].catagories.name}</p>`;//department
      	productArray += `</div></div></div>`;

	}
}



function executeSalesAfterFileIsLoaded(){
	var data = JSON.parse(this.responseText);
	sendToCatDom(data);
}

function executeThisCodeAfterFileFails(){
	alert("Sale is Unavailable");
}

var myRequestProducts = new XMLHttpRequest();
myRequestProducts.addEventListener("load", executeProducteAfterFileIsLoaded);
myRequestProducts.addEventListener("error", executeThisCodeAfterFileFails);
myRequestProducts.open("GET", "products.json");
myRequestProducts.send();




//////////////////////DEPARTMENTS



function executeDepartmentsAfterFileIsLoaded(){
	var data = JSON.parse(this.responseText);
	sendToCatDom(data);
}

function executeThisCodeAfterFileFails(){
	alert("Departments are Unavailable");
}

var myRequestProducts = new XMLHttpRequest();
myRequestDepartments.addEventListener("load", executeProducteAfterFileIsLoaded);
myRequestDepartments.addEventListener("error", executeThisCodeAfterFileFails);
myRequestDepartments.open("GET", "departments.json");
myRequestDepartments.send();










