//declaring global variables to be called later in the program
let storesArray = [];

//let elBody = document.getElementById('my-body');
let elTable = document.getElementById('store-table');
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
//console.log(totalSalesPerHr); =returns error because the function is not called until later. query in chrome console window

//populate instances of the constructor with store data(arguments); parameters and 
let StoreOne = new CookieStore('Northern Cookies', 'North', 5, 6, 13, 'Chocolate', 100, 10, 20);
let StoreTwo = new CookieStore('Crooked Cookies', 'South', 10, 6, 13, 'Chocolate Chip', 200, 10, 20);
let StoreThree = new CookieStore('Kay\'s Cookies', 'East', 5, 6, 13, 'Sugar', 100, 10, 20);

//push instances of Cookie Store constructor data to an Array of stores
storesArray.push(StoreOne, StoreTwo, StoreThree); //method you would have parenthesis and passing it a value in ()
console.log(StoreOne, StoreThree, StoreTwo);

// function displayStoreNames() {
//     for(let i = 0; i < storesArray.length; i+=1){
//         let elStoreName = document.createElement('h1');
//         elStoreName.setAttribute('class','store-name');
//         elBody.appendChild(elStoreName);
//         elStoreName.innerHTML = storesArray[i].store;
//     }
// }
//     console.log(storesArray[1].open + '-' + storesArray[0].close);
////////////////////////////////////////
    //console.log(storesArray[0].hours);
    //displayStoreNames();
    //    console.log(elRow);
    // console.log(elRow);
//console.log(displayTotalSales);
//create new store using a listener

// function displayTotalCookieSales (store) {
//     let elRow = document.createElement('tr');
//     elTable.appendChild(elRow);
//     let elRowHeader = document.createElement('th');
//     elRow.appendChild(elRowHeader);
// }


// function totalSalesPerHr() {
//     return (Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust) * this.sales;
// }
// console.log(totalSalesPerHr);
// totalSalesPerHr();
//TESTING function randomNumber() {
    //     let randomNumber;
    //     let n = '';
    //     // for(let count = 0; count < len; count++) {
        //     for(let i = 0; i < storesArray.length; i+=1){
            //         randomNumber = (Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust) * this.sales;
            //         // randomNumber = Math.floor(Math.random() * 10);
            //         n += randomNumber.storesArray();
            //     }
            //     return n;
            // }
            // document.getElementById("ACCOUNT").value = randomNumber();
            
            ///////////moved math from here///////////////////////
            // for(let i = StoreOne.open; i < StoreOne.close; i++) {
                //     let result = StoreOne.totalSalesPerHr();
                //     console.log(result);
                // }
                
                // function displayTotalSales(store) {
function displayTotalSales(store) {
    let elRow = document.createElement ('tr');
    elTable.appendChild(elRow);
    let elRowHeader = document.createElement('th');
    elRow.appendChild(elRowHeader);
// for(let i = s.CookieStore.open; i < s.CookieStore.close; i++) {
    for(let i = store.open; i < store.close; i+=1) {
        let result = store.totalSalesPerHr();
        let elTableData = document.createElement('td');
        elRow.appendChild(elTableData);
        elTableData.innerHTML = result;
        store.totalCookiesPerDay += result;
        //store.displayTotalSales;  //totalSalesPerHr();
        //console.log(displayTotalSales(store);
    }
}
//console.log(displayTotalSales);
//displayTotalSales();
function popTable() {
    for(let i = 0; i < storesArray.length; i++) {
        displayTotalSales(storesArray[i]);
    }
}
popTable();


// displayTotalSales(StoreOne);
// displayTotalSales(StoreTwo);
