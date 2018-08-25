//declaring global variables to be called later in the program
let storesArray = [];

//let elBody = document.getElementById('my-body');
let elTable = document.getElementById('store-table');

let elForm = document.getElementById('store-form');
//let elStoreName = document.getElementById('store-name');
//console.log(elStoreName);

// define a constructor
let CookieStore = function(name, location, employees, storeOpen, storeClose, type, CookESales, minCustomers, maxCustomers) {
//declaring a property
    this.store = name;
    this.location = location;
    this.employees = employees;
    //stores open from 6p-1a 
    this.open = storeOpen;
    this.close = storeClose;
    this.type = type;
    this.sales = CookESales;
    this.minCust = minCustomers;
    this.maxCust = maxCustomers;
    this.totalCookiesPerDay = 0;  //important to initialize for use later in code
    // Math based on Math.random to generate numeric test data and math.floor to round the #s
    //	Math.floor(Math.random() * (100 – 30)) + 30
    this.totalSalesPerHr = function() {
        return (Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust) * this.sales;
    };
};

//populate instances of the constructor with store data(arguments) 
let StoreOne = new CookieStore('Northern Cookies', 'North', 5, 1, 10, 'Chocolate', 100, 10, 20);
let StoreTwo = new CookieStore('Crooked Cookies', 'South', 10, 1, 10, 'Chocolate Chip', 200, 10, 20);
let StoreThree = new CookieStore('Kay\'s Cookies', 'East', 5, 1, 10, 'Sugar', 100, 10, 20);

//push instances of Cookie Store constructor data to an Array of stores
storesArray.push(StoreOne, StoreTwo, StoreThree); //method you would have parenthesis and passing it a value in ()
console.log(StoreOne, StoreThree, StoreTwo);

// 2c
function displayTHeader() {
    let elRow = document.createElement ('tr');
    elTable.appendChild(elRow);
    let elNameHeader = document.createElement('th');
    elRow.appendChild(elNameHeader);
    elNameHeader.innerHTML = 'PCC Stores';

    for(let i = 1; i < 10; i+=1) {
    // for(let i = CookieStore.open; i < CookieStore.close; i+=1) {
        let elTABLEHeader = document.createElement ('th');
        elRow.appendChild(elTABLEHeader);
        elTABLEHeader.innerHTML = i + ':00 PM';
    }
    let elTOTALHeader = document.createElement ('th');
    elRow.appendChild(elTOTALHeader);
    elTOTALHeader.innerHTML = 'Total Cookie Sales';
}
///////////////////////

//elFTOTAL
/////////////////////////////
//revised from 2b
// function displayTotalSales(store) {
//     let elRow = document.createElement ('tr');
//     elTable.appendChild(elRow);
//     let elRowHeader = document.createElement('th');
//     elRow.appendChild(elRowHeader);

function displayTotalSales(stores) {
    let elRow = document.createElement ('tr');
    elTable.appendChild(elRow);
    let elRowHeader = document.createElement('th');
    elRow.appendChild(elRowHeader);
    elRowHeader.innerHTML = stores.store;
    for(let i = 1; i < 10; i+=1) {
//    for(let i = store.open; i < store.close; i++) {  //<--makes no difference

    /////////////////////////
//    for(let i = 6; i < 13; i+=1) {
//    for(let i = store.open; i < store.close; i+=1) {  <--makes no difference
        let result = stores.totalSalesPerHr();
        let elTableData = document.createElement('td');
        elRow.appendChild(elTableData);
        elTableData.innerHTML = result;
        stores.totalCookiesPerDay += result;
    }  //<--check this
    let elTOTALTableData = document.createElement ('th');
    elRow.appendChild(elTOTALTableData);
    elTOTALTableData.innerHTML = stores.totalCookiesPerDay; //<--check
}

let storeName = elForm.storeName;
//(A) let CookESales = elForm.CookESales;

function createNewStore(event) {
    event.preventDefault();
    let newStore = new CookieStore (storeName.value, 'West', 10, 1, 10, 'Macadamia', 200, 50, 120);
//(A) let newStore = new CookieStore (storeName.value, 'West', 10, 6, 13, 'Macadamia', 200, CookESales.value, 50, 120);

    console.log(newStore);
    displayTotalSales(newStore); 
}
elForm.addEventListener('submit', createNewStore);  //make it required
console.log(elForm.storeName);


function popTable() {

    displayTHeader();
    for(let i = 0; i < storesArray.length; i++) {
        displayTotalSales(storesArray[i]);
    }
}
popTable();


// displayTotalSales(StoreOne);
// displayTotalSales(StoreTwo);
