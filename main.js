//declaring global variables to be called later in the program
let storesArray = [];

let elBody = document.getElementById('my-body');
let elTable = document.getElementById('store-table');

let elForm = document.getElementById('store-form');
let elStoreName = document.getElementById('store-name');
//console.log(elStoreName);

// define a constructor
let CookieStore = function(name, location, employees, storeOpen, storeClose, type, CookESales, minCustomers, maxCustomers) {
    //declaring a property
    this.store = name;
    this.location = location;
    this.employees = employees;
    this.open = storeOpen;  //stores open from 6p-1a
    this.close = storeClose;
    this.type = type;
    this.sales = CookESales;
    this.minCust = minCustomers;
    this.maxCust = maxCustomers;
    this.totalCookiesPerDay = 0;  //important to initialize for use later in code
    this.totalCookiesSalesPerHrArray = [];
    // Math based on Math.random to generate numeric test data and math.floor to round the #s
    //	Math.floor(Math.random() * (100 – 30)) + 30
    this.totalSalesPerHr = function() {
        return (Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust) * this.sales;

    };
};

//populate instances of the constructor with store data(arguments); instantiating the object constructor
let StoreOne = new CookieStore('Northern Cookies', 'North', 5, 1, 10, 'Chocolate', 100, 10, 20);
let StoreTwo = new CookieStore('Crooked Cookies', 'South', 10, 1, 10, 'Chocolate Chip', 200, 10, 20);
let StoreThree = new CookieStore('Kay\'s Cookies', 'East', 5, 1, 10, 'Sugar', 100, 10, 20);

//push instances of Cookie Store constructor data to an Array of stores
storesArray.push(StoreOne, StoreTwo, StoreThree); //method you would have parenthesis and passing it a value in ()
console.log(StoreOne, StoreThree, StoreTwo);

// 2c  THE TABLE ROW 1 HEADER
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
//}
function displayTotalSales(stores) {
    let elRow = document.createElement ('tr');
    elTable.appendChild(elRow);
    let elRowHeader = document.createElement('th');
    elRow.appendChild(elRowHeader);
    elRowHeader.innerHTML = stores.store;
    for(let i = 1; i < 10; i++) {
//    for(let i = store.open; i < store.close; i++) {  //<--makes no difference

    /////////////////////////
//    for(let i = 6; i < 13; i+=1) {
//    for(let i = store.open; i < store.close; i+=1) {  <--makes no difference
        let result = stores.totalSalesPerHr(); //<- refers to the Math function declared above
        let elTableData = document.createElement('td');
        elRow.appendChild(elTableData);
        elTableData.innerHTML = result;
        stores.totalCookiesPerDay += result;
 //   }
        stores.totalCookiesSalesPerHrArray.push(result); // To add the TOTAL ROW
   }  //<--check this
let elTOTALTableData = document.createElement ('th');
//let elRow = document.createElement ('tr');
elRow.appendChild(elTOTALTableData);
elTOTALTableData.innerHTML = stores.totalCookiesPerDay; //<--this was declared above and set to 0
console.log(stores.store, stores.totalCookiesPerDay);
    }  //<-- check this

///////////////////////////////////////////////////////
    function displayTFooter() {
        let elTFRow = document.createElement('tr');
        elTable.appendChild(elTFRow);

        let elTFTitle = document.createElement('th');
        elTFRow.appendChild(elTFTitle);
        elTFTitle.setAttribute('class', 'footer');
        elTFTitle.innerHTML = 'Avg Cookies P/Hr'; //<-- or TOTAL
//    } 
    let total = 0;
    for(let i=0; i < 5; i++) {
        let totalSalesPerHr = 0;
//        let totalSalesPerHr = 0;
for(let j=0; j < storesArray.length; j++) {
    totalSalesPerHr += storesArray[j].totalCookiesSalesPerHrArray[i];
    //            console.log ('inner for loop', storesArray[j].store, j); //<- property is store not name
}  //<-- turn this on and 2nd
console.log('outer for loop', i);
// create an array to catch the 'j' captured values

//    }  //CAUSED TABLE TO DISAPPEAR
let elTotalSalesPerHrFooter = document.createElement ('th');
//let elTFRow = document.createElement('tr');
elTotalSalesPerHrFooter.setAttribute('class', 'footer');
elTFRow.appendChild(elTotalSalesPerHrFooter);//<-repeat further down
elTotalSalesPerHrFooter.innerHTML = totalSalesPerHr; //<--check here if not working
total += totalSalesPerHr;
//    CookieStore.totalCookiesPerDay += totalSalesPerHr;   //total CookiesPerDay is defined in the global scope

console.log('total is', total);
console.log('totalSalesPerHr', totalSalesPerHr);
//OLD console.log(stores.open, totalSalesPerHr); //move up be defined
//OLD    console.log(CookieStore.totalCookiesPerDay);
//}  //2ND

    let elTotalSalesPerDayFooter = document.createElement ('th');
    elTotalSalesPerDayFooter.setAttribute('class', 'footer');
    elTFRow.appendChild(elTotalSalesPerDayFooter);//<-repeat further down
    elTotalSalesPerDayFooter.innerHTML = total; //<--check here if not working
//    elTotalSalesPerDayFooter.innerHTML = totalSalesPerHr; //totalCookiesPerDay; //<--check here if not working
    }   
} //2nd
////////////////////////////////////////
let storeName = elForm.storeName;    //<==check this
    //let CookESales = elForm.CookESales;   //<== chk this

    function createNewStore(event) {
        event.preventDefault();

        console.log(elTable.childNodes);

        elTable.removeChild(elTable.childNodes[elTable.childNodes.length - 1]);

let newStore = new CookieStore (storeName.value, 'West', 10, 1, 10, 'Macadamia', 200, 50, 120);
//  let newStore = new CookieStore (storeName.value, 'West', 10, 1, 10, 'Macadamia', 200, CookESales.value, 50, 120);   //<== chk this
storesArray.push(newStore);

console.log(newStore);
        displayTotalSales(newStore); 
        displayTFooter();

    }
    elForm.addEventListener('submit', createNewStore);  //make it required
    console.log(elForm.storeName);


    function popTable() {

        displayTHeader();
        for(let i = 0; i < storesArray.length; i++) {
            displayTotalSales(storesArray[i]);
        }
        displayTFooter ();
    }
    popTable();
//} // ADDED AND IT REPEATED ROWS